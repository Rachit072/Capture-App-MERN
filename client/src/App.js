import React from 'react';
import capture from './images/capture.png';
import { Container,Typography,AppBar, Grow,Grid} from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


const App=()=>{
    return (
        <Container maxidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography align='center' variant='h2' >Capture</Typography>
                <img src={capture} alt="capture" height={160} />
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