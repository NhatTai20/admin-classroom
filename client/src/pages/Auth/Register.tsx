import React, { useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Breadcrumb,
  DatePicker
} from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import Axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = () => {
  const [form] = Form.useForm();
    const navigate = useNavigate();
  const onFinish = (values: any) => {
    Axios.post('http://127.0.0.1:3001/api/admin/create', {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        gender: values.gender,
        password: values.password,
        createdAt: moment().format('YYYY-MM-DD HH:MM:SS'),
        updatedAt: moment().format('YYYY-MM-DD HH:MM:SS'),
    }).then((respone) => {
        console.log(respone);
    })
    //navigate('/admin');
  };
  
  return (
      <>
      <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/users">
                    <UserOutlined />
                    <span>Admin List</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Row>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="firstName"
        label="First name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        name="lastName"
        label="Last name"
        rules={[
          {
            required: true,
            message: 'Please input your last name',
            whitespace: true,
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="birthday"
        label="Birthday"
        rules={[
          {
            required: true,
            message: 'Please select birthday!',
          },
        ]}
      >
        <DatePicker/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </Row>
    </>
  );
};
export default RegisterPage