import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';

export function getPosts() { 
  return async function (dispatch) {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: GET_POSTS, posts: posts.data });
  };
}

