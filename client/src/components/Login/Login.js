import { Button } from '@mui/material';
import { Container,Typography} from '@mui/material';
import React from 'react'
import capture from '../../images/capture.png';
import './Login.css'

const Login = () => {
  return (
    <div className='loginContainer'>
        <div className='loginBox'>
            <img className='image' src={capture} alt="capture" width={60} />
            <Typography className='heading' sx={{mb:2}} variant='h5'fontFamily={'monospace'} >Capture</Typography>
            <div><input className='loginInput' type='email' placeholder='Email' required/></div>
            <div><input className='loginInput' type='password' placeholder='Password' required/></div>
            <Button sx={{m:2}} color='primary' variant='contained'>Login</Button>
        </div>
    </div>
    
  )
}

export default Login
