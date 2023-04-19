import { useNavigate } from 'react-router-dom';
import './Profile.css'


export default function Profile() {
    const Nav = useNavigate()    
    const user =  JSON.parse(localStorage.getItem('user'))
    return (
        
    <>
    <div className="container fluid">
     <h1 className='greeting' >Hii Welcome {user.name} </h1>
     <div className="profile">
        <div className="field">
            User Name  :  {user.name}
        </div>
        <div className="field">
            Phone :  {user.phone}
        </div>
        <div className="field">
            E-mail  :  {user.name}
        </div>
     <button type="submit" className="btn btn-primary" id='btn1' onClick={()=>{
        localStorage.clear()
        Nav('/')
     }}  >Log Out</button>
     
     </div>

    </div>

    </> 
    );
}

