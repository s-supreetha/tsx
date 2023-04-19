import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="success"
    title="Task #taskid is successfully removed"
    // replace #taskid
    // extra={[
    //   <Button type="primary" key="console">
    //     OK
    //   </Button>,
    // ]}
  />
);

export default App;