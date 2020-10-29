import axios from 'axios';

export const getPosts = () => {
  const response = axios.get("http://52.231.101.140:8080/posts")
    .then((resolve) => {
      return resolve.data.content;
    })
    .catch((error) => {
      console.log("getPost", error.response);
      return error.resonse;
    });
  return response;
}

export const createPost = (postFormData, headers = {}) => {
    
    const response = axios.post(`http://52.231.101.140:8080/posts`, postFormData, {headers}).then(async (resolve) => {
      return resolve.data;
    });
    console.log("response", response);
    return response;
}

export const getNewToken = () => {
  // 발급
  const headers = { 'Content-type': 'application/json' };
  let data = {};
  data.email = "test@test.test";
  data.password = "testtest";
  data = JSON.stringify(data);
  
  const response = axios.post(`http://52.231.101.140:8080/session`, data, {headers})
    .then(async (resolve) => {
      await window.localStorage.setItem("Bearer_access_token", resolve.data.accessToken);
      await window.localStorage.setItem("Bearer_access_token_createTime", new Date().getTime());
      return resolve.data.accessToken;
    });
  
  return response;
}

export const checkToken = (token = null) => {
  
  if( token === null ) { // 발급
    console.log("토큰이 없습니다. 새로 발급받습니다.");
    return getNewToken();
  }
  
  // 발급 받은지 얼마 안됐으면 expire;
  // const expireCheckTime = new Date().getTime() - window.localStorage.getItem("Bearer_access_token_createTime");
  
  // 체크
  const headers = { "Authorization": `Bearer ${token}` };
  axios.get(`http://52.231.101.140:8080/user`, {headers: headers})
  .then((resolve) => {
    if (resolve.status === 200) { // 토큰 정상
      console.log("토큰이 정상입니다. return 합니다.");
      return token;
    }
  })
  .catch((error) => {
    if (error.response.status === 500 ) { // 발급
      console.log("토큰에 문제가 있습니다. 새로 발급받습니다.");
      return getNewToken();
    }
  });
}