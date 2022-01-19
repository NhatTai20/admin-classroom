import React, {useState, useEffect} from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined, EditFilled } from '@ant-design/icons';
import {
    DeleteTwoTone,
    EditTwoTone,
    EyeTwoTone,
    LockTwoTone,
    UnlockTwoTone,
} from '@ant-design/icons';
import {
    Button,
    Card,
    Col,
    Divider,
    message,
    Modal,
    Row,
    Select,
    Space,
    Tag,
    Tooltip,
} from 'antd';
import DataTable, { ExpanderComponentProps } from 'react-data-table-component';
import SearchBar from '../../components/shared/SearchBar';
import { ArrowDownOutlined } from '@ant-design/icons';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-paginations/dist/react-paginations.css';
const sortIcon = <ArrowDownOutlined />;
const UserListPage = () => {
    const [admin, setAdmin] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
   async function fetchMyAPI() {
    let respone = await fetch('https://admin-classroom-server.herokuapp.com/api/admin/getAllAdmin');
    let responeJSON = await respone.json();
    setAdmin(responeJSON.results);
   }
   fetchMyAPI();
  },[]);
  const data = admin;
  const columns = [
    {
        name: 'First name',
        selector: (row: any) => row.firstName,
        sortable: true,
    },
    {
      name: 'Last name',
      selector: (row: any) => row.lastName,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: (row: any) => row.gender,
      sortable: true,
    },
    {
        name: 'Email',
        selector: (row: any) => row.email,
        sortable: true,
      },
    {
      name: 'Created At',
      selector: (row: any) => row.createdAt,
      sortable: true,
    },
];
const [q, setQ] = useState("");
function search(rows : any) {
    return rows.filter(
      (row:any) => 
        row.firstName.toLowerCase().indexOf(q) > -1 ||
        row.lastName.toLowerCase().indexOf(q) > -1 ||
        row.email.toLowerCase().indexOf(q) > -1
    )
  }
  type DataRow = {
    id: number;
    avatarUrl: string,
    birthday: Date;
    studentId: number,
    createdAt: Date,
    email: string,
    gender: string,
    updatedAt: Date
  };
  const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };
  
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/home">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/users">
                    <UserOutlined />
                    <span>Admin List</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container-fluid">
            <Row justify="end">
            <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {navigate('/admin/create')}}
        >
          Create an admin
        </Button>
      </Row>
                <Row>
                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                    <Col span={24}>
                      
                        <Divider />
                        <DataTable
                        title="Admin list"
                        pagination
                        keyField="id"
                        columns={columns}
                        data={search(data)}
                        sortIcon={sortIcon}
                        highlightOnHover
                        subHeader subHeaderComponent={<input type="type" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search admin"/>}
                        expandableRows expandableRowsComponent={ExpandedComponent}
                        />
                        <Modal
                            footer={
                                <Button type="primary">
                                   
                                </Button>
                            }
                        >
                            <p></p>
                        </Modal>

                     
                    </Col>
                    {/* <!-- Individual column searching (text inputs) Ends--> */}
                </Row>
            </div>
        </>
    )
};
export default UserListPage;