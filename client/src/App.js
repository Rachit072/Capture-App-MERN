import React, { useEffect, useState } from 'react';
import capture from './images/capture.png';
import { Container,Typography,AppBar, Grow,Grid} from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './components/actions/posts';
import './App.css';
import {useDispatch} from 'react-redux';

const App=()=>{
    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    
    return (
        <Container maxidth='lg'>
            <AppBar className='appBar' style={{flexDirection:'row'}} position='static' color='inherit'>
                <Typography className='heading' variant='h2' >Capture</Typography>
                <img className='image' src={capture} alt="capture" width={60} />
            </AppBar>   
            <Grow in>
                <Container>
                    <Grid  container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;