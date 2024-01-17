import { Button } from '@mui/material';
import {Typography} from '@mui/material';
import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {GoogleLogin,googlelogout} from '@react-oauth/google';
import './Login.css'

const Login = () => {
  const [isSignup,setIsSignup] = useState(false);
  
  const switchMode=()=>{
    setIsSignup(!isSignup);
  }
  const handleChange =()=>{

  }
  const handleSubmit=()=>{

  }
  return (
    <div className='loginContainer'>
        <form className='loginBox' onSubmit={handleSubmit}>
            <LockOutlinedIcon/>
            <Typography className='heading' sx={{mb:2}} variant='h6'fontFamily={'monospace'} >{isSignup ? 'Sign Up':'Sign In'}</Typography>
            {isSignup && (
              <>
              <input  className='loginInput' type='text' placeholder='First Name' onChange={handleChange} required/>
              <input  className='loginInput' type='text' placeholder='Last Name' onChange={handleChange} required/>
              </>
            )}
            <div><input className='loginInput' type='email' placeholder='Email' onChange={handleChange} required/></div>
            <div><input className='loginInput' type='password' placeholder='Password' onChange={handleChange} required/></div>
            {
              isSignup && 
            <div>
              <input className='loginInput' type='password' placeholder=' Repeat Password' onChange={handleChange} required/>
            </div> 
            }
            <div className='google-login'>
            <GoogleLogin  />
            </div>
            <Button type='submit' sx={{m:2}} color='primary' variant='contained'>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
            <Button variant='text' onClick={switchMode} >{isSignup ? 'Already have an account Sign In':"Don't have an account ? Sign Up"}</Button>
        </form>
    </div>
    
  )
}

export default Login
