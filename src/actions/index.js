import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'create_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=0315PAPERCLIP1234';

export default function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return{
      type:FETCH_POSTS,
      payload: request
  };
}
export default function createPost(values){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`, values);

  return{
    type: CREATE_POST,
    payload: reuest
  };
}
