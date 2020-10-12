import axios from 'axios';

export const getPosts = () => {
  axios.get("http://52.231.101.140:8080/posts");
}

export const postPost = () => {
  
}