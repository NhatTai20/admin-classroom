import { Breadcrumb, Button, Form, Input, message, Row, Spin } from 'antd';
import React, { useState } from 'react';
import Axios from 'axios';
import { HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/shared/NavBar';
const HomePage = () => {
    const navigate = useNavigate();
    return(
      <>
      <NavBar/>
      <Breadcrumb>
                <Breadcrumb.Item href="/home">
                    <HomeOutlined />
                </Breadcrumb.Item>
            </Breadcrumb>
      <Button type="primary" block onClick={()=>{navigate('/users')}}>
      Student management
    </Button>
    <Button type="primary" block style={{"marginTop":20}} onClick={()=>{navigate('/admin')}}>Admin management</Button>
    <Button type="primary" block style={{"marginTop":20}} onClick={()=>{navigate('/courses')}}>
      Course management
    </Button>
      </>
    );
};
export default HomePage;
