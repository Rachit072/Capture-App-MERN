import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import capture from '../../images/capture.png';
import {Typography,AppBar,Box,Drawer, List, ListItem, useMediaQuery} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';
  
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState (false);
  const isMobile = useMediaQuery ('(max-width:600px)');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
 
  return (
    <Box sx={{ flexGrow: 1}} >
     <AppBar className='appBar' style={{flexDirection:'row'}} position='static' color='inherit'>
                <Box style={{display:'flex', flexDirection:'row'}}>
                    <img className='image' src={capture} alt="capture" width={40} />
                    <Typography className='heading' variant='h6'fontFamily={'monospace'} >Capture</Typography>
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
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={()=>{}}
                    color="inherit"
                    sx={{mr:3,mt:0.5}}
                    >
                    <Link className='link' to='/login'><AccountCircle /></Link>
                </IconButton>
                </Box>
            </AppBar> 
    </Box>
  )
}

export default Header
