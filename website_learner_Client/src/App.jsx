import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from "./Pages/LoginPage";
import { createContext } from "react";
import ProfilePage from "./Pages/ProfilePage";

export const myContext = createContext()
export const reducer = (state , action)=>{
  console.log(state);
  switch(action.type){
    case 'UPDATE':
       return {
         ...state , [action.Key] : action.payload ,
       }

    default:
      return state
}
}


function App() {
  

  return (
    <div className="App">
 <>
       <myContext.Provider value={reducer} >
          
          
          <Router>
            <Routes>
              
            <Route path='/'  element={<RegisterPage  />}  />
            <Route path='/Login'  element={<LoginPage  />}  />
            <Route path='/Profile'  element={<ProfilePage  />}  />

            </Routes>
          </Router>

       </myContext.Provider>
    </>

     </div>
  )
}

export default App
