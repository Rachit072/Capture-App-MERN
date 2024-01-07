import React from 'react'
import { Link } from 'react-router-dom';
import capture from '../../images/capture.png';
import {Typography,AppBar,Box} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './Header.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
     <AppBar className='appBar' style={{flexDirection:'row'}} position='static' color='inherit'>
                <Box style={{display:'flex', flexDirection:'row'}}>
                    <img className='image' src={capture} alt="capture" width={40} />
                    <Typography className='heading' variant='h6'fontFamily={'monospace'} >Capture</Typography>
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
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
                <Search>
                    <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
                    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }}/>
                </Search>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-haspopup="true"
                    onClick={()=>{}}
                    color="inherit"
                    sx={{mr:3}}
                    >
                    <Link className='link' to='/login'><AccountCircle /></Link>
                </IconButton>
            </AppBar> 
    </Box>
  )
}

export default Header
