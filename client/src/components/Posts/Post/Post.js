import React from 'react'
import {Card,CardMedia,Button,CardActions,CardContent,Typography} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './post.css';
import moment from 'moment';

const Post = ({post,setCurrentId}) => {
  return (
    <Card className='card'>
      <CardMedia className='media' image={post.selectedFile} title={post.title}/>
        <div className='overlay'>
          <Typography varient="h6">{post.creator}</Typography>
          <Typography varient="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className='overlay2'>
          <Button style={{color:"white"}} size='small' onClick={()=>{setCurrentId(post._id)}}>
            <MoreHorizIcon fontSize='default'/> 
          </Button>
        </div>
        <div className='details'>
          <Typography varient="body2" color='textSecondary'>{post.tags.map((tag)=>`#${tag} `)}</Typography>
        </div>
        <CardContent>
          <Typography className='title' varient="h5" >{post.message}</Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={()=>{}}>
            <ThumbUpIcon font='small' />
            Like
            {post.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={()=>{}}>
            <DeleteIcon font='small' />
            Delete
          </Button>
        </CardActions>
    </Card>
  )
}

export default Post;
