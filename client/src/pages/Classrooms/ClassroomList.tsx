import React from 'react';
import { Breadcrumb, Col, Divider, message, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ClassroomAdd from '../../components/features/Classrooms/ClassroomAdd';
import ClassroomCard from '../../components/features/Classrooms/ClassroomCard';
const ClassroomList = () => {
    return(
        <>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Courses</Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="end">
        <ClassroomAdd/>
      </Row>
      <Divider />
        <Row gutter={[16, 24]}>
            <Col key="1">
              <ClassroomCard />
            </Col>
        </Row>
        </>
    )
};
export default ClassroomList;