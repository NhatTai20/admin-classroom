import { Button, Form, Input, message, Row, Spin } from 'antd';
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();
  const onFinish = (values:any) => {
    Axios.post('http://127.0.0.1:3001/api/admin/login', {
          email: values.email,
          password: values.password,
      }).then((respone) => {
        if(respone.data.result.length) {
          navigate('/home');
        }
        else {
          alert("login fail");
        }
      })
      
  }
    return(
      <div
        style={{
          marginTop: 30,
          backgroundColor: 'white',
          paddingLeft: 5,
          paddingRight: 5,
        }}
      >
        <Row justify="center">
          <h1>Login</h1>
        </Row>
        <Row justify="center">
          <Form
            name="register-form"
            labelCol={{
              md: { offset: 8, span: 8 },
              sm: { offset: 3, span: 18 },
            }}
            wrapperCol={{
              md: { offset: 8, span: 8 },
              sm: { offset: 3, span: 18 },
            }}
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            style={{ width: '100%' }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                {
                  type: 'email',
                  message: 'Please input a valid email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </div>
    );
};
export default LoginPage;




