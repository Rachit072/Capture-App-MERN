import { Button } from '@mui/material';
import {Typography} from '@mui/material';
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import {GoogleLogin} from '@react-oauth/google';
import './Login.css'
import { signin, signup } from '../actions/Auth';

const initialState = {firstName:'',lastName:'',email:'',password:'',confirmPassword:''}
const Login = () => {
  const [isSignup,setIsSignup] = useState(false);
  const [formData,setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const switchMode=()=>{
    setFormData(initialState);
    setIsSignup(!isSignup);
  }
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
   if(isSignup){
    dispatch(signup(formData,navigate))
   }else{
    dispatch(signin(formData,navigate))
   }
  }
  return (
    <div className='loginContainer '>
      <div className='loginBox'>
      <LockOutlinedIcon/>
      <Typography className='heading' sx={{mb:2}} variant='h6'fontFamily={'monospace'} >{isSignup ? 'Sign Up':'Sign In'}</Typography>
        <form className='login-box'  onSubmit={handleSubmit}>
            {isSignup && (
              <>
              <input name='firstName'  className='loginInput' type='text' placeholder='First Name' onChange={handleChange} required/>
              <input name='lastName' className='loginInput' type='text' placeholder='Last Name' onChange={handleChange} required/>
              </>
            )}
            <div><input name='email' className='loginInput' type='email' placeholder='Email' onChange={handleChange} required/></div>
            <div><input name='password' className='loginInput' type='password' placeholder='Password' onChange={handleChange} required/></div>
            {
              isSignup && 
            <div>
              <input name='confirmPassword' className='loginInput' type='password' placeholder=' Repeat Password' onChange={handleChange} required/>
            </div> 
            }
            <div className='google-login'>
            {/* <GoogleLogin  /> */}
            </div>
            <Button type="submit" sx={{m:2}} color='primary' variant='contained'>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
            <Button variant='text' onClick={switchMode} >{isSignup ? 'Already have an account Sign In':"Don't have an account ? Sign Up"}</Button>
        </form>
      </div>
    </div>
    
  )
}

export default Login;
