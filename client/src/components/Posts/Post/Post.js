import React from 'react'
import {Card,CardMedia,Button,CardActions,CardContent,Typography} from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {Link} from 'react-router-dom';
import './post.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../actions/posts';

const Post = ({post,setCurrentId}) => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes =()=>{
    if( post.likes && post.likes.length > 0){
      return post.likes.find((like)=>like===(user?.result?.googleId || user?.result?._id))
      ?(
        <><ThumbUpIcon fontSize='small'/>&nbsp;{post.likes.length>2 ? `You and ${post.likes.length-1} others`:`${post.likes.length} like${post.likes.length>1 ?'s':' '}`}</>
      ):(
        <><ThumbUpAltOutlinedIcon fontSize='small' />&nbsp;{post.likes.length}{post.likes.length===1?'Like':'Likes'}</>
      );
  }
  return <><ThumbUpAltOutlinedIcon fontSize='small' />&nbsp;Like</>
}
const truncateText = (text, limit) => {
  const words = text.split(' ');

  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }

  return text;
};

  return (
    <Card className='card'>
      <CardMedia className='media' image={post.selectedFile} title={post.title}/>
        <div className='overlay'>
          <Typography variant="h6">{post.name || post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId===post?.creator || user?.result?._id===post?.creator)&&
        <div className='overlay2'>
          <Button style={{color:"white"}} size='small' onClick={()=>setCurrentId(post._id)}>
            <MoreHorizIcon fontSize='default'/> 
          </Button>
        </div>}
        <div className='details'>
          <Typography  className='tag' variant="caption"  color='textSecondary'>{post.tags.map((tag)=>`#${tag} `)}</Typography>
        </div>
        <Typography className='title' variant="subtitle2"  gutterBottom>{post.title}</Typography>
        <CardContent>
        <Typography variant="caption" color="textSecondary" component="p">
          {truncateText(post.message, 25)} 
        </Typography>
        </CardContent>
        <CardActions className='card-action'>
          <Button size='medium' color='primary' disabled={!user?.result} onClick={()=>{dispatch(likePost(post._id ))}}>
            <Likes/>
          </Button>
          {(user?.result?.googleId===post?.creator || user?.result?._id===post?.creator)&&(
          <Button size='medium' color='primary' onClick={()=>{dispatch(deletePost(post._id))}}>
            <DeleteIcon font='small' />
            Delete
          </Button>
          )}
          <Link to={`/posts/${post._id}`} className="link" style={{color:'#1976D2'}} ><ArrowDropDownIcon fontSize='large'/></Link>
        </CardActions>
    </Card>
  )
}

export default Post;
