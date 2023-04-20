
import validUser ,{ AppError } from '../Auth/Validation.js'
import userModel from '../model/model.js'
// import validUser, { AppError } from './Validation.js'


//  Try Catch block take Controller as Parameter 
const catchAsync = (controller)=>{
    return function(req,res,next){
        return Promise.resolve(controller(req,res,next)).catch(next)
    }
}


//  Register User Controller 
const registerUser = catchAsync( async (req,res,next)=>{
    //  Validate the Data
    console.log(req.body);
    const validData = await validUser.validateAsync(req.body)

    // Save the Data in database 
    const data = await userModel.create(validData)
    console.log(data)
    // Send Successfully Response 
    res.status(201).json({
        status : true , data : data
    })
})
export const loginUser = catchAsync( async (req,res,next)=>{
    //  Validate the Data
    console.log(req.body);
    const validData = await validUser.validateAsync(req.body)

    // Save the Data in database 
    const data = await userModel.findOne({email : validData.email})
    if(!data)  next(new AppError('User Not Found !' , 404))
    if(data.password !== validData.password )  next(new AppError('incorrect Password !' , 404))
    console.log(data)
    // Send Successfully Response 
    res.status(201).json({
        status : true , data : data
    })
})

export default registerUser