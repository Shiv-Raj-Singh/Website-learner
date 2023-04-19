export default function Navbar(){
    return (
      // navbar navbar-expand-lg navbar-dark bg-dark
      <>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{
             margin: '5px' , padding : '3px' , borderRadius : '40%' , textAlign : "center" ,backgroundColor : 'silver' , color : 'black' , fontFamily : 'arial italic'
            }} >Website Learner</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />              
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Register">Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Profile">Profile</a>
                </li>
                
              </ul>

            </div>
          </div>
        </nav>

      </>
      );
}