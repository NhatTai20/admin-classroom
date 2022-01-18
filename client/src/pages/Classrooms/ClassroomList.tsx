import React, {useEffect, useState} from 'react';
import { Breadcrumb, Col, Divider, message, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ClassroomAdd from '../../components/features/Classrooms/ClassroomAdd';
import ClassroomCard from '../../components/features/Classrooms/ClassroomCard';
import courseApi from '../../api/courseApi';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import { ArrowDownOutlined } from '@ant-design/icons';
import Q from 'q';
const sortIcon = <ArrowDownOutlined />;

const ClassroomList = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
   async function fetchMyAPI() {
    let respone = await fetch('http://127.0.0.1:3001/api/courses/getAllCourses');
    let responeJSON = await respone.json();
    setCourses(responeJSON.results);
   }
   fetchMyAPI();
  },[]);
  const data = courses;
  const columns = [
    {
        name: 'Name',
        selector: (row: any) => row.name,
        sortable: true,
    },
    {
      name: 'Topic',
      selector: (row: any) => row.topic,
      sortable: true,
    },
    {
      name: 'Student Limit',
      selector: (row: any) => row.studentLimit,
      sortable: true,
    },
    {
      name: 'Student Exist',
      selector: (row: any) => row.studentExist,
      sortable: true,
    },
    {
      name: 'Created At',
      selector: (row: any) => row.createdAt,
      sortable: true,
    },
];
type DataRow = {
  id: number;
  name: string;
  code: string;
  description: string,
  topic: string,
  studentLimit: number,
  studentExist: number,
  ownerId: number,
  createdAt: Date,
  updatedAt: Date
};

const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
function search(rows : any) {
  return rows.filter(
    (row:any) => 
      row.name.toLowerCase().indexOf(q) > -1
  )
}
const [q, setQ] = useState("");
    return(
        <>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/home">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Courses</Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="end">
      </Row>
      <Divider />
        <Row gutter={[16, 24]}>
        <DataTable
            title="Courses list"
            pagination
            keyField="id"
            columns={columns}
            data={search(data)}
            sortIcon={sortIcon}
            subHeader subHeaderComponent={<input type="type" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search course"/>}
            expandableRows expandableRowsComponent={ExpandedComponent}
        />
        </Row>
        </>
    )
};
export default ClassroomList;