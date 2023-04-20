
import Register from "../Components/Register";
import ProfilePage from "./ProfilePage";



function RegisterPage() {
const data =     JSON.parse(localStorage.getItem('user'))
    return (<>
    {
        data ? <ProfilePage/> : <Register/>    
    }
     
    </>  );
}

export default RegisterPage;