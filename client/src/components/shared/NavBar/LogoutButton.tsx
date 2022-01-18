import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function LogoutButton() {
  //#region handle functions
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate('/')
  };
  //#endregion

  return (
    <Button onClick={handleLogoutClick} type="link">
      Logout
    </Button>
  );
}