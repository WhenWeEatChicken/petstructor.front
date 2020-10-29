import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const BoardCreate = (props) => {
  const { onCreate } = props
  
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [attachment, setAttachment] = useState(null);

  const handleChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleChangeContents = useCallback((e) => {
    setContents(e.target.value);
  }, []);

  const handleChangeAttachment = useCallback((file, fileList) => {
    console.log(file)
    setAttachment(file);
  }, []);

  // const normFile = (e) => {
  //   console.log('Upload event:', e);
  
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  
  //   return e && e.fileList;
  // };

  const handleSubmit = useCallback((e) => {
    onCreate(title, contents, attachment)
  }, [title, contents, attachment, onCreate]);


  return (

    <Form name="basic">
      <Form.Item label="title" name="title" onChange={handleChangeTitle}
        rules={[
          { required: true, message: '제목을 적어주세요' },
        ]}
      >
        <Input placeholder="제목을 적어주세요" />
      </Form.Item>

      <Form.Item label="contents" name="contents" onChange={handleChangeContents}
        rules={[
          { required: true, message: '내용을 적어주세요' },
        ]}
      >
        <Input placeholder="내용을 적어주세요" />
      </Form.Item>

      <Form.Item name="attach" label="attach"
        // valuePropName="fileList"
      >
        <Upload name="attach" beforeUpload={handleChangeAttachment}>
          <Button icon={<UploadOutlined />}>파일 선택</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSubmit} > {/* htmlType="submit" */}
          Submit
        </Button>
      </Form.Item>

      <input type="hidden" name="publishDate" value="???"/>
      <input type="hidden" name="type" value="QNA"/>
    </Form>

  );
}

export default BoardCreate;
