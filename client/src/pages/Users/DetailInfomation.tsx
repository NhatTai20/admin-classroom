/* eslint-disable react/prop-types */
import { Col, Descriptions, Divider, Image, Row, Space, Tag } from 'antd';
import React from 'react';
import VerificationTag from '../../components/features/Users/VerificationTag';

export default function DetailInformation() {
  // constants
  const USER_STATUS_PROTOTYPE = {
    ACTIVE: {
      content: 'Active',
      color: 'green',
    },
    BLOCKED: {
      content: 'Blocked',
      color: 'volcano',
    },
    DELETED: {
      content: 'Deleted',
      color: 'red',
    },
  };

  //   Render functions
  const renderDeletedStatus = () => {
    return (
      <>
        <Tag color={USER_STATUS_PROTOTYPE.ACTIVE.color}>Not deleted</Tag>
      </>
    );
  };
  const renderActiveStatus = () => {
    return (
        <>
          <Tag color={USER_STATUS_PROTOTYPE.BLOCKED.color}>Blocked</Tag>
        </>
      );
  };

  return (
    <>
      {/* Avatar */}
      <Row justify="center">
        <Image width={300} src={'https://via.placeholder.com/150'} />
      </Row>

      <Divider />

      {/* Information */}
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <Descriptions.Item label="Email">{'_____'}</Descriptions.Item>
        <Descriptions.Item label="Fullname">
          {'_____'}
        </Descriptions.Item>
        <Descriptions.Item label="Student ID">
          {'_____'}
        </Descriptions.Item>

        <Descriptions.Item label="Verification">
          <VerificationTag/>
        </Descriptions.Item>
        {/* <Descriptions.Item label="Type">
        <TypeTag isAdmin={isAdmin} typeString={type} />
      </Descriptions.Item> */}
        <Descriptions.Item label="Status">
          <Row>
            <Col span={24}>{renderDeletedStatus()}</Col>
          </Row>
          <br />
          <Row>
            <Col span={24}>{renderActiveStatus()}</Col>
          </Row>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}
