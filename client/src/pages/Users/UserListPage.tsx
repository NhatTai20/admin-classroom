import React, {useState, useEffect} from 'react';
import { Breadcrumb, Menu, Dropdown } from 'antd';
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
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-paginations/dist/react-paginations.css';
import menu from 'antd/lib/menu';
const sortIcon = <ArrowDownOutlined />;
const UserListPage = () => {
    const [users, setUsers] = useState([]);
  useEffect(() => {
   async function fetchMyAPI() {
    let respone = await fetch('http://127.0.0.1:3001/api/users/getAllUser');
    let responeJSON = await respone.json();
    setUsers(responeJSON.results);
   }
   fetchMyAPI();
  },[]);
  const data = users;
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
      name: 'Student ID',
      //selector: (row: any) => row.studentId,
      //sortable: true,
      cell: (row: any) => <>
        <input type="text" name='newId' placeholder={row.studentId} onChange={(e)=>{handleEditID(e.target.value, row.Id)}}/>
        </>
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
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/users">
                    <UserOutlined />
                    <span>User List</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container-fluid">
              
                <Row>
                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                    <Col span={24}>
                      
                        <Divider />
                        <DataTable
                        title="Users list"
                        pagination
                        keyField="id"
                        columns={columns}
                        data={search(data)}
                        sortIcon={sortIcon}
                        subHeader subHeaderComponent={<input type="type" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search user"/>}
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

function handleEditID(newID: any, id: any) {
    console.log(newID);
    
}



