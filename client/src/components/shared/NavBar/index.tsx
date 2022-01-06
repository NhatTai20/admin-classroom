import { Col, Layout, Menu, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import STATUS from '../../../constants/status';
import LogoutButton from './LogoutButton';

export default function NavBar() {


    return (
        <Layout.Header>
            <Row>
                <Col span={22}>
                    <Menu theme="dark" mode="horizontal">

                        <>
                            <Menu.Item key="home">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="users">
                                <Link to="/users">Users</Link>
                            </Menu.Item>
                            <Menu.Item key="accounts">
                                <Link to="/accounts">Accounts</Link>
                            </Menu.Item>
                            <Menu.Item key="courses">
                                <Link to="/courses">Courses</Link>
                            </Menu.Item>
                        </>


                    </Menu>
                </Col>
                <Col span={2}>
                    <LogoutButton />
                </Col>
            </Row>
        </Layout.Header>
    );
}
