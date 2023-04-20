import {Schema , model} from "mongoose";

const user = new Schema(
    {
        name: String ,
        email: {
          type: String,
          required: true,
          unique: true,
        },
        phone: {
          type: String,
          required: true,
          unique: true,
        },
        password : String
    }
)

const userModel = new model('User-Register' , user)
export default userModel