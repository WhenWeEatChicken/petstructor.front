import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';

const BoardCreate = () => {
  const tokenIs = () => {
    return window.localStorage.getItem("Bearer_access_token") === null ? 
    "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjksIm5hbWUiOiLtnZHsmrDsmrEiLCJpYXQiOjE2MDI1MDY0NTksImV4cCI6MTYwMjUxMzY1OX0.sI9VsqY77LIXfDesg36MiWYmZ1nnyqqr8knyZJGF9B4"
    : 
    window.localStorage.getItem("Bearer_access_token");
  }

  const fetchBoardCreate = async () => {
    const headers = {
      'Content-type': 'multipart/form-data',
      "Authorization": `Bearer ${tokenIs()}`,
      "withCredentials": "true"
    }
    // const response = await axios.post(`http://52.231.101.140:8080/posts`, "", {"headers":headers});
    let form = new FormData();
    form.append("title", "sampleAt21:54");
    form.append("contents", "sampleContentsAt21:54");
    form.append("type", "QNA");
    form.append("status", "Y");
    const response = await axios.post(`http://52.231.101.140:8080/posts`, form, {headers});
    // const response = await axios.post(`/posts`, "");
    console.log("response", response);
    // JSON.stringify(posts)
    return response;
  }

  return (
    <div>
        title : <input type="text" name="title" /> <br/>
        contents: <input type="text" name="contents" />  <br/>
        <input type="hidden" name="publishDate" value="???"/>
        <input type="hidden" name="type" value="QNA"/>
        <button onClick={fetchBoardCreate} > 가즈아 </button>
    </div>
  );
}

export default BoardCreate;
