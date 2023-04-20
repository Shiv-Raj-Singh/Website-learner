import Joi from "joi"


const validUser = Joi.object({
    name : Joi.string().trim().min(3).max(30).regex(/^[a-zA-Z(, \)]*$/) ,
    email: Joi.string().trim().email(),
    phone: Joi.string().trim().min(10).max(10).regex(/^[6-9]{1}[0-9]{9}$/),
    password: Joi.string().required().trim().min(8).max(15).regex(/^[a-zA-Z0-9?(@$#&){1}]*$/),
    
})


export default validUser

//  Error Pass Class inside next 
export class AppError extends Error {
    constructor(message , statusCode){
        super(message)
        this.statusCode = statusCode 
        this.message = message
        this.status = false
    }
}