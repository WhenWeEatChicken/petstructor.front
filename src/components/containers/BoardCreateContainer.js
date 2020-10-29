import React from 'react';
import BoardCreate from '../BoardCreate';
import {createPost} from '../../lib/api.js';

import swal from 'sweetalert';

const BoardCreateContainer = () => {

  const onCreate = async (title, contents, attach) => {
    
    const headers = {
      'Content-type': 'multipart/form-data',
      'Authorization': `Bearer ${window.localStorage.getItem("Bearer_access_token")}`,
    }

    let formData = new FormData();
    formData.append("title", title);
    formData.append("contents", contents);
    formData.append("file", attach)
    formData.append("type", "QNA");
    formData.append("status", "N");
    
    await createPost(formData, headers)
      .then((resolve) => {
        swal("게시글이 작성 되었습니다", { icon: "success" })
        .then(()=> {
          window.location.href = "/board";
        });
      })
      .catch((error) => {
        swal(error.response.body, { icon: "error" });
      })
  }
  
  return <BoardCreate onCreate={onCreate}/>;
}

export default BoardCreateContainer;
