import React from "react";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loader = () => (
  <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Spin indicator={<LoadingOutlined style={{fontSize: 48}} spin/>} />
  </div>
);

export default Loader;