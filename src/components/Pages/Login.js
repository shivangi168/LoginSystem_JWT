import React,{useState}  from 'react'

import BaseLogin from '../imports/BaseLogin.jsx';
import Loginform from '../imports/Loginform.jsx';
import { useDispatch,useStore } from 'react-redux';
// import { registerAction } from '../../container/actions.js';
import { loginAction } from '../../container/actions.js';
import { useNavigate } from 'react-router-dom';




export default function Login() {
  const [errorMessage, setError] = useState("")
  const[email,setEmail]=useState("")
  const[password,SetPassword]=useState("")

  const dispatch=useDispatch();
  const store=useStore();
  const navigate=useNavigate();
  // handle subit handle function
  const handleSubmit=(event)=>{
    event.preventDefault();

    const userCredential ={
      email,
      password
      
    }
    // const userdata={email:"admin@gmail.com",password:"admin123"}
    // console.log(dispatch({type:"REGISTER_SUCCESS",payload:"login dispatch"}));
    // const login=console.log(dispatch(loginAction(userdata)));
    const login = dispatch(loginAction(userCredential))

    login
    .then(data => navigate('/'))
    .catch(error => {
      setError(error.err)
      console.log(error.err);
    })
    
    // console.log(store.getState())

    // console.log(userCredential);
    }

  let loginData={
    handleSubmit,
    setEmail,
    SetPassword,
    errorMessage,
    setError
  }

  return (
    <div id="login">
    <div className="container">
      <div className="row login-box">
      <BaseLogin/>
      <Loginform loginState={loginData}/>
       
      </div>
    </div>
  </div>
);
}
