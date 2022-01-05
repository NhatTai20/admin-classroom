import { Button, Form, Input, message, Row, Spin } from 'antd';
import React from 'react';
const LoginPage = () => {
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