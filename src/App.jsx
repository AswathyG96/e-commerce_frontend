import { useState } from 'react'
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import './App.css'
import './index.css'
import './pro'
import './login';
import { Routes,Route, useNavigate } from 'react-router-dom'
function App() {
  
  const [action, setAction] = useState("Login Now")

  return (
  <>
  <div>
    <Routes>
      <Route path='/products' element={<pro/>}/>
    </Routes>
  </div>
    <div className="imgg" style={{marginTop:'20px'}}>
      <img className='im' align="left"  src="https://static.vecteezy.com/system/resources/thumbnails/003/689/228/small_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" />
   
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
           {action==="Login Now"?<div></div>:<div className="input">
        <i class="fa-duotone fa-solid fa-user"></i>
          <input type='text' placeholder='Name'/>
         
        </div>}
     
          <div className="input">
          <i class="fa-duotone fa-solid fa-envelope"></i>
          <input type='email'placeholder='Email Id'/>
          </div>
          <div className="input">
        <i class="fa-duotone fa-solid fa-lock"></i>
          <input type='password' placeholder='Password'/>
        </div>
        </div>
    
       
        {action==="Create Account"?<div></div>:   <div className="forgot-password">Forget password?<span>Click here!</span></div>}
   
        <div className="submit-container">
        <div className={action==="Create Account"?"submit gray":"submit"}onClick={()=>{setAction("Login Now")}}>Login Now</div>
        <div className={action==="Login Now"? "submit gray":"submit"} onClick={()=>{setAction("Create Account")}}>Create Account</div>
       
        </div>
        <div className='tex'>or You Can Join with:</div>
        <div className="imges">
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne1WTynbZs2Lo2wnKRIsxwELeBVjC2bqdOQ&s" width={'50px'} height={'50px'} alt="" />
        <img src="https://png.pngtree.com/element_our/sm/20180515/sm_5afaf0c4b6017.jpg" width={'50px'} height={'50px'} alt="" />
        <img src="https://thumbs.dreamstime.com/b/twitter-logo-icon-voronezh-russia-november-round-blue-color-164586139.jpg" width={'50px'} height={'50px'} alt="" />
        
        </div>
      </div>
          </div>
          </>
  )
}

export default App
