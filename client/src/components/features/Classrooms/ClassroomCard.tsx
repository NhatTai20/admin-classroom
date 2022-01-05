import { Avatar, Card, Col, Row, Typography } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import React from 'react';
import moment from 'moment';

const { Title, Link, Text } = Typography;

export default function ClassroomCard() {
  //#region parse props
  //#endregion

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Row justify="center">
        <Title level={4}>
          <Link>Title</Link>
        </Title>
      </Row>
      <Row justify="center">
        <Col span={5}>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </Col>
        <Col>
          <Row>
            <Text strong>fullname</Text>
          </Row>
          <Row>
            <Text italic>{moment().format('DD/MM/YYYY')}</Text>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
