import React from 'react';
import { Card, Space } from 'antd';
import Link from 'next/link';

const App: React.FC = () => (
  <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
    <a href="/projects/epics">
      
    {/* //replace with project id */}
    <Card title="#projectID" size='default'>
      <h3>Project Title</h3>
      {/* //replace project title */}
      <p>Card content</p>
    </Card>
    </a>
  </Space>
);

export default App;

