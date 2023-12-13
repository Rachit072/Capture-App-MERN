import React from 'react';
import capture from './images/capture.png';
import { Container,Typography,AppBar, Grow,Grid} from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import './App.css';

const App=()=>{
    
    return (
        <Container maxidth='lg'>
            <AppBar className='appBar' position='static' color='inherit'>
                <Typography className='heading' align='center' variant='h2' >Capture</Typography>
                <div><img className='image' src={capture} alt="capture" width={100} /></div>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid justify='space-between' alignItems="stretch" spacein={3}>
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