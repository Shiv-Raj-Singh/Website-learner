import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import { useEffect } from "react";
import RegisterPage from "./RegisterPage";


function ProfilePage() {
    const Nav = useNavigate()    
    const user =  JSON.parse(localStorage.getItem('user'))
    console.log(user);
    
    function UserAuth() {
        Nav('/')
    }



    return (<>
     {
        user ? <div>  <Profile/>   </div>   : <RegisterPage/>
     }
 
    </>  );
}

export default ProfilePage;