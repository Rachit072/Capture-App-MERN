import axios from 'axios';

const url = 'http://localhost:3000/posts';

export default fetchPosts = ()=> axios.get(url);
