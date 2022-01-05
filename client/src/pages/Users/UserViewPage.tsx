import React from 'react';
import DetailInformation from './DetailInfomation';
import { ArrowLeftOutlined } from '@ant-design/icons';
import {
    Button,
    Divider,
    message,
    Tabs,
    Typography,
    Row,
    Col,
    Card,
} from 'antd';
import { useEffect, useState } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { TabPane } = Tabs;
const UserViewPage = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/users">
                    <UserOutlined />
                    <span>User List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <EyeOutlined />
                    <span>User View</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Button
        icon={<ArrowLeftOutlined />}
      >
        Back to Users List
      </Button>

      <Divider />

      <Card
        title={
          <Row style={{ width: '100%' }} justify="center">
            <Col span={24}>
              <Title level={2} style={{ textAlign: 'center' }}>
                {'Anonymous'}
              </Title>
            </Col>
            <Col span={24}>
              <Title level={3} style={{ textAlign: 'center' }}>
                #{'ID'}
              </Title>
            </Col>
          </Row>
        }
      >
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Information" key="1">
            {/* {information ? (
              <DetailInformation information={information} />
            ) : null} */}
          </TabPane>
          {/* <TabPane tab="Purchase History" key="2">
                                        {purchaseHistory
                                            ? 
                                            <PurchaseHistory
                                                stripeHistory={purchaseHistory.paymentHistoryStripe}
                                              />
                                            : 'Empty'}
                                    </TabPane> */}
        </Tabs>
      </Card>
        </>
    )
};
export default UserViewPage;