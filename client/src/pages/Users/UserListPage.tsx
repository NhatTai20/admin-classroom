import React from 'react';
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
import DataTable from 'react-data-table-component';
import SearchBar from '../../components/shared/SearchBar';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-paginations/dist/react-paginations.css';
const UserListPage = () => {
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
                <Row justify="end" gutter={{ sm: 24, md: 12, lg: 8 }}>
                    <Col>
                        <SearchBar/>
                    </Col>
                </Row>
                <Row>
                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                    <Col span={24}>
                        <Space>
                            <Button
                                className="btn btn-primary btn-lg"
                                type="primary"
                            >
                                Add 
                            </Button>
                            <Select
                                value={ 'Sort'}
                                style={{ minWidth: '12.5rem' }}
                            >
                                <Select.Option
                                    key="sort-1"
                                    value={JSON.stringify({
                                        sortBy: 'createdAt',
                                        order: 'asc',
                                    })}
                                >
                                    Created time: Ascending
                                </Select.Option>
                                <Select.Option
                                    key="sort-2"
                                    value={JSON.stringify({
                                        sortBy: 'createdAt',
                                        order: 'desc',
                                    })}
                                >
                                    Created time: Descending
                                </Select.Option>
                            </Select>
                        </Space>

                        <Divider />

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