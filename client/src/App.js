import React, { useEffect, useState } from 'react';
import { Container, Grow,Grid, useMediaQuery, Box} from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './components/actions/posts';
import './App.css';
import {useDispatch} from 'react-redux';

const App=()=>{

    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery ('(max-width:600px)');
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grow in>
                <Container>
                    <Grid className={`maincontainer ${isMobile ? 'mobile' : ''}`} container justify="space-between" alignItems="stretch" spacing={2}>
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