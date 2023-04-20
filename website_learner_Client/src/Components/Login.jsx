import React, { useReducer, useState } from 'react'
import './Login.css';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { reducer } from '../App';


const dummyUser = { email : '' , password:'' }

const Login = () => {
    const Navigate = useNavigate()

    const [user, dispatch] = useReducer(reducer , dummyUser)
    const clickHandler = ()=>{
        // Navigate('/login')
    }

    const handleOnChange = (e)=>{
        dispatch({
            type : 'UPDATE' , Key : e.target.name , payload : e.target.value
        })
    }

    const handleSubmit = async  (e)=>{
        e.preventDefault()
        try {
        
            console.log(user);
            const response = await axios.post("https://website-learner.onrender.com/login" , user)
            const data = await response.data
            console.log(data);
            data.status&&toast.success(data.message , {position : 'top-center'}) 
            localStorage.setItem('user' , JSON.stringify(data.data)) 
            Navigate('/Profile')
            // data.status ? alert(data.message) : alert(data.message) 
            
        } catch (err) {
            err.response ? toast.error(err.response.data.message ,  {position : 'top-center' , theme: 'dark'}) :toast.error(err.message)
        }
    }


    return (
        <div className="JoinPage2 mt-5 pt-3">
          <div className="JoinContainer mt-3 pt-2">
            
             <form className="container customFormLogin mt-1" onSubmit={handleSubmit} method={"POST"} >
                    <h3 className="h3 text-center">Login Here </h3>
            
                    <div className="mb-3 ">
                        <input type="email" name="email" value={user.email} onChange={handleOnChange}  className="input form-control mt-3" placeholder='Enter Your Email' required id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" value={user.password} name="password" onChange={handleOnChange}  className="input form-control mt-4" required placeholder='Enter Your Password' id="exampleInputPassword1" />
                    </div>
                                            
                    <div className="mb-3 form-check">
                        <div className='d-flex justify-content-between footer mt-3'>
                            <div className=''>
                            <input type="checkbox" required className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label checkme " required for="exampleCheck1">Check me out</label>
                            </div>
                            <div>
                            <p onClick={()=>Navigate('/')} className="pLink">Haven't Account Register Here</p>
                            </div>
                        </div>
    
                    </div>
                <button type="submit" className="btn btn-primary"id='btn1' >Submit</button>
            </form>
            </div>
            <ToastContainer />
        </div>
              );
}

export default Login