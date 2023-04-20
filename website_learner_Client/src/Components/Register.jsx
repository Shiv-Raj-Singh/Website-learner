import React, { useReducer, useState } from 'react'
import './register.css'
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from '../App';



const dummyUser = {name : '' ,  phone : '' , email: '' , password : ''}


const Register = () => {
    // const [user, setUser] = useState(dummyUser);
    const [user, dispatch] = useReducer(reducer , dummyUser)
    const [pic , setPic] = useState(0)
    const Navigate = useNavigate()

    const clickHandler = ()=>{
        // Navigate('/login')
    }

    const handleOnChange = (e)=>{
        console.log(e.target.files);
        dispatch({
            type : 'UPDATE' , Key : e.target.name , payload : e.target.value 
        })
    }



    const handleSubmit = async  (e)=>{

        console.log(  'inside submot button', user);
        e.preventDefault()
        try {
            const response = await axios.post("https://website-learner.onrender.com/register" , user)
            console.log(response);
            const data = await response.data
            console.log(response);
            data.status && clickHandler()
            data? toast.success("Submit-Successfully !" ,{theme : 'green', position: "top-center"}) : alert(data.msg) 
            localStorage.setItem('user' , JSON.stringify(data.data)) 
            Navigate('/Profile')
            
        } catch (err) {
            // setUser(dummyUser)
            console.log(err);
            err.response ? toast.error(err.response.data.message ,{theme : 'dark', position: "top-center"}) :toast.error(err.message ,{position: "top-center"})
            console.log(err);
        }
    
    }



    return (
        <>
            <div className="JoinPage mt-4 pt-3">
          <div className="JoinContainer mt-3 py-3 px-3 pt-3">
            
             <form className="container mt-2 customForm pt-1" id='customForm' onSubmit={handleSubmit}>
                    {/* <h1 className='hding'>Register Your Account </h1> */}
                    <h3 className="h3 mt-3 text-center">Register Here </h3>
                    <div className="mb-2 mt-4 ">
                        <input type="text" value={user.name} className="form-control input"required placeholder='Enter Your Name' name="name" onChange={handleOnChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2 ">
                        <input type="tel" value={user.phone} className="form-control"required placeholder='Enter Your Phone' name="phone" onChange={handleOnChange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2 ">
                        <input type="email" value={user.email} className="form-control" required placeholder='Enter Your Email' name="email" onChange={handleOnChange}id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2">
                        <input type="password"  value={user.password} className="form-control" required placeholder='Enter Your Password' name="password" onChange={handleOnChange}  id="exampleInputPassword1" />
                    </div>
  
                    <div className="mb-3 form-check">
                        <div className='d-flex footer justify-content-between'>
                            <div>
                            <input type="checkbox" className="form-check-input" required id="exampleCheck1" />
                        <label className="form-check-label checkme" for="exampleCheck1">Check me out</label>
                            </div>
                            <div>
                                <p onClick={()=>{Navigate('/Login')}} className="pLink">Have an account? Login Here</p>
                            </div>
                        </div>          
                    </div>
                <button type="submit" className="btn btn-primary" id='btn1' >Submit</button>
            </form>
            </div>
        
        </div>
        <ToastContainer />
        </>
                      );
}

export default Register


// onChange={(e)=>{
//     console.log(e.target.files[0]);
//     setPic(e.target.files[0])
// }} 