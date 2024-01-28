import {Grid } from '@mui/material';
import React from 'react'
import {useSelector} from 'react-redux';
import Shimmer from '../Shimmer/Shimmer';
import Post from './Post/Post';
import './Posts.css'; 

function Posts({setCurrentId}) {
  const posts = useSelector((state)=>state.posts)

  // console.log(posts);
  return (
    !posts.length?<Shimmer/>:
      <Grid className='container' container alignItems='stretch' spacing={3}>
        {posts.map((post)=>(
          <Grid  key={post._id} item xs={12} sm={4}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
  )
}

export default Posts;
