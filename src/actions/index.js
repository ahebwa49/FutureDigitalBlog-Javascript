import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=0315PAPERCLIP1234';

export default function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return{
      type:FETCH_POSTS,
  }

}
