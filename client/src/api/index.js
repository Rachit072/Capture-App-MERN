import axios from 'axios';

// const API = axios.create({
//    baseURL:'http://localhost:5000',
//    withCredentials: true,
// });
const API = axios.create({
   baseURL:'https://captureapp.onrender.com',
   withCredentials: true,
});

API.interceptors.request.use((req)=>{
   const user = JSON.parse(localStorage.getItem('profile'));
   const token = user?.token;
   console.log('Token (Interceptor):', token);

   if (token) {
     req.headers.Authorization = `Bearer ${token}`;
   }
   return req;
})
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);