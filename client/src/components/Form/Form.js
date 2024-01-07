import React, { useEffect, useState } from 'react';
import {Paper,Typography,TextField,Button} from '@mui/material';
import FileBase from 'react-file-base64';
import './Form.css';
import { useDispatch } from 'react-redux';
import { createPost,updatePost } from '../actions/posts';
import { useSelector } from 'react-redux';

export default function Form({currentId,setCurrentId}) {
  const [postData,setPostData] = useState({  creator:'',title:'',message:'',tags:'',selectedFile:''})
  const post = useSelector((state) => currentId ? state.posts.find((p)=>p._id===currentId) : null )
  const dispatch = useDispatch();
  
  useEffect(()=>{
    if(post) setPostData(post);
  },[post]);

  const handleSubmit=(e)=>{ 
      e.preventDefault();
      
      if(currentId){
        dispatch(updatePost(currentId,postData))
      } else {
      dispatch(createPost(postData));
    }
    clear();
  }
  const clear=()=>{
    setCurrentId(null);
    setPostData({  creator:'',title:'',message:'',tags:'',selectedFile:''})
  }

  return (
    <Paper className='paper' >
        <form autoComplete='off' className='root form' noValidate onSubmit={handleSubmit}>
          <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} a Post</Typography>
          <TextField className='TextField-root' name='creator' variant='outlined' label='creator' fullWidth  value={postData.creator}
            onChange={(e)=>setPostData({...postData,creator:e.target.value})}
          />
          <TextField className='TextField-root' name='title' variant='outlined' label='title' fullWidth  value={postData.title}
            onChange={(e)=>setPostData({...postData,title:e.target.value})}
          />
          <TextField className='TextField-root' name='message' variant='outlined' label='message' fullWidth  value={postData.message}
            onChange={(e)=>setPostData({...postData,message:e.target.value})}
          />
          <TextField className='TextField-root' name='tags' variant='outlined' label='tags' fullWidth  value={postData.tags}
            onChange={(e)=>setPostData({...postData,tags:e.target.value.split(',')})}
          />
          <div className='fileInput'>
            <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}>SelectFile</FileBase> 
          </div>
          <Button className='buttonSubmit' style={{marginBottom:"10px"}} variant='contained' size='large' color='primary' type='submit' fullWidth>Submit</Button>
          <Button variant='contained' size='small' color='secondary'  onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
  )
}
