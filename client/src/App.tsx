import { Layout } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Auth/Login';
import RegisterPage from './pages/Auth/Register';
import ClassroomList from './pages/Classrooms/ClassroomList';
import UserEditPage from './pages/Users/UserEditPage';
import UserListPage from './pages/Users/UserListPage';
import UserViewPage from './pages/Users/UserViewPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>

          <Route path="/courses" element={<ClassroomList/>}/>

          <Route path="/users" element={<UserListPage/>}/>
          <Route path="/users/view/:id" element={<UserViewPage/>}/>
          <Route path="/users/edit/:id" element={<UserEditPage/>}/>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
