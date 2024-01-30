import moment from 'moment';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './postPage.css';

const Postpage = () => {
    const { postId } = useParams();
    const posts = useSelector((state) => state.posts);
    const post = posts.find((p) => p._id === postId);
  
    if (!post) {
      return <p>Post not found</p>;
    }
  
    return (
        <div className="custom-post-details">
      <div className='custom-card'>
        <div className='custom-overlay'>
          <h2>{post.name || post.creator}</h2>
          <p>{moment(post.createdAt).fromNow()}</p>
        </div>
        <img className='custom-media' src={post.selectedFile} alt={post.title}/>
        <div className='custom-details'>
          <p className='custom-tag'>{post.tags.map((tag) => `#${tag} `)}</p>
        </div>
        <h4 className='custom-title'>{post.title}</h4>
        <div className="custom-content">
          <p>{post.message}</p>
        </div>
      </div>
    </div>
    );
}

export default Postpage;
