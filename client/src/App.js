import React, { useEffect, useState } from 'react';
import capture from './images/capture.png';
import { Container,Typography,AppBar, Grow,Grid, useMediaQuery, Box} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './components/actions/posts';
import './App.css';
import {useDispatch} from 'react-redux';

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
  

const App=()=>{

    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery ('(max-width:600px)');
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='appBar' style={{flexDirection:'row'}} position='static' color='inherit'>
                <Box style={{display:'flex', flexDirection:'row'}}>
                    <img className='image' src={capture} alt="capture" width={40} />
                    <Typography className='heading' variant='h6'fontFamily={'monospace'} >Capture</Typography>
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
                <AccountCircle />
                </IconButton>
            </AppBar>   
            <Grow in>
                <Container>
                    <Grid className={`maincontainer ${isMobile ? 'mobile' : ''}`} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Box>
    );
}

export default App;