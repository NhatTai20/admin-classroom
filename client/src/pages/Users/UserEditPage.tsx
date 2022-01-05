import { ArrowLeftOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Divider, message, Row, Tabs, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router';
import { HomeOutlined, UserOutlined, EditFilled } from '@ant-design/icons';
// import { useFunctionalitiesRedux } from '~/hooks';
const { TabPane } = Tabs;
const { Title } = Typography;

export default function UserEditPage() {
  return (
    <>
      <Breadcrumb style={{ marginTop: 5, marginBottom: 5 }}>
      <Breadcrumb.Item href="/">
        <HomeOutlined />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/users">
        <UserOutlined />
        <span>User List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <EditFilled />
        <span>User Edit</span>
      </Breadcrumb.Item>
    </Breadcrumb>
      <div className="container-fluid">
        <Button
          icon={<ArrowLeftOutlined />}
        >
          Back to Users List
        </Button>

        <Divider />

        <Row justify="center">
          <Row className="card">
            <Row style={{ width: '100%' }} justify="center">
              <Col span={24}>
                <Title level={2} style={{ textAlign: 'center' }}>
                  'Anonymous'
                </Title>
              </Col>
              <Col span={24}>
                <Title level={3} style={{ textAlign: 'center' }}>
                   'ID'
                </Title>
              </Col>
            </Row>
            <Row className="card-body">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Information" key="1">
                  
                 
                </TabPane>
                {/* <TabPane tab="Purchase History" key="2">
                  <Result
                    status="warning"
                    title="You are not allowed to change any purchase history of users."
                  />
                </TabPane> */}
              </Tabs>
            </Row>
          </Row>
        </Row>
      </div>
    </>
  );
}
