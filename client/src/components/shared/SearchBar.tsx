import React from 'react';
import { Input, message } from 'antd';
export default function SearchBar() {
    return(
        <Input.Search
        placeholder="Search"
        enterButton="Search"
        size="large"
        allowClear
      />
    )
}