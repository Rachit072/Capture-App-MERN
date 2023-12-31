import { LIKE, UPDATE, DELETE, FETCH_ALL,CREATE } from "../../config/actionTypes"; 

const reducer = (posts=[], action) => {
  switch (action.type) {  
    case DELETE:
        return posts.filter((post)=>post._id !== action.payload)
    case UPDATE:
    case LIKE:
      return posts.map((post)=>post._id===action.payload._id ?  { ...post, ...action.payload } : post)
    case FETCH_ALL:
        return action.payload;
    case CREATE:
        return [...posts,action.payload];
    default:
        return posts;
  }
}
export default reducer;