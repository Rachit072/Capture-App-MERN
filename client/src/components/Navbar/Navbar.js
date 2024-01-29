import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import capture from '../../images/capture.gif';
import {Typography,AppBar,Box,Drawer, List, ListItem, useMediaQuery, Toolbar, Button, Avatar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../config/actionTypes';
import { jwtDecode } from 'jwt-decode';
  
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState (false);
  const isMobile = useMediaQuery ('(max-width:600px)');
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    dispatch({ type: LOGOUT });
    navigate('/login');
    setUser(null);
  }, [dispatch, navigate]);
  useEffect(()=>{
    const token = user?.token;
    if(token){
      const decodedToken = jwtDecode(token);
      if(decodedToken.exp*1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location,user?.token,logout])
  return (
    <Box sx={{ flexGrow: 1}} >
     <AppBar className='appBar' style={{flexDirection:'row'}} position='static' color='inherit'>
                <Box style={{display:'flex', flexDirection:'row'}}>
                    <img className='image' src={capture} alt="capture" width={70} />
                    <Typography component={Link} to='/' className='heading' variant='h6'fontFamily={'monospace'} >Capture</Typography>
                </Box>
                <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ ml:2,pt:2, display: { xs: 'block', md: 'none' } }} onClick={toggleMobileMenu}>
                  <MenuIcon />
                </IconButton>
                {/* Mobile Drawer */}
                <Drawer anchor="left" open={isMobileMenuOpen} onClose={toggleMobileMenu}>
                  <List>
                    <ListItem button onClick={toggleMobileMenu}>
                      <Link to="/" className='link'>
                        <Typography className='heading' variant='h6' fontFamily={'monospace'}>Home</Typography>
                      </Link>
                    </ListItem>
                    <ListItem button onClick={toggleMobileMenu}>
                      <Link to="/about" className='link'>
                        <Typography className='heading' variant='h6' fontFamily={'monospace'}>About</Typography>
                      </Link>
                    </ListItem>
                    <ListItem button onClick={toggleMobileMenu}>
                      <Link to="/contact" className='link'>
                        <Typography className='heading' variant='h6' fontFamily={'monospace'}>Contact Us</Typography>
                      </Link>
                    </ListItem>
                  </List>
                </Drawer>
                <Box style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Box style={{ display: !isMobile ? 'flex' :'none', flexDirection: 'row' }} >
                    <Link to="/" className='link'>
                        <Typography sx={{ mr: 3 }} className='heading' variant='h6' fontFamily={'monospace'}>Home</Typography>
                    </Link>
                    <Link to="/about" className='link'>
                        <Typography sx={{ mr: 3 }} className='heading' variant='h6' fontFamily={'monospace'}>About</Typography>
                    </Link>
                    <Link to="/contact" className='link'>
                        <Typography sx={{ mr: 3 }} className='heading' variant='h6' fontFamily={'monospace'}>Contact Us</Typography>
                    </Link>
                </Box>
                <Toolbar className='toolbar'>
                  {user ? (
                    <div className='profile'>
                      <Avatar className='purple'>{user?.result?.name.charAt(0)}</Avatar>
                      <Typography className='userName' variant='h6'>{user?.result?.name}</Typography>
                      <Button className='logout' variant='contained' color='secondary' onClick={logout}>Logout</Button>
                    </div>
                  ):(
                  <Button variant='contained' color='primary' component={Link} to='/login'>Sign In</Button>
                  )}
                </Toolbar>
                </Box>
            </AppBar> 
    </Box>
  )
}

export default Navbar
