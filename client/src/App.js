import React, { useEffect } from 'react';
import capture from './images/capture.png';
import { Container,Typography,AppBar, Grow,Grid} from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './components/actions/posts';
import './App.css';
import {useDispatch} from 'react-redux';

const App=()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    
    return (
        <Container maxidth='lg'>
            <AppBar className='appBar' position='static' color='inherit'>
                <Typography className='heading' variant='h2' >Capture</Typography>
                <img className='image' src={capture} alt="capture" width={100} />
            </AppBar>   
            <Grow in>
                <Container>
                    <Grid  container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;