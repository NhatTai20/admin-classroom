import React, {useEffect, useState} from 'react';
import { Breadcrumb, Col, Divider, message, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ClassroomAdd from '../../components/features/Classrooms/ClassroomAdd';
import ClassroomCard from '../../components/features/Classrooms/ClassroomCard';
import courseApi from '../../api/courseApi';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';
const ClassroomList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
   async function fetchMyAPI() {
    let respone = await fetch('http://127.0.0.1:3001/api/courses/getAllCourses');
    let responeJSON = await respone.json();
    
    console.log(responeJSON);
   }
   fetchMyAPI();
  }
  )
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