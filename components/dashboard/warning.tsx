import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status='error'
    title="Are you sure you want to delete task ICS001?"
    // replace ICS001
    // extra={[
    //   <Button type="primary" key="console">
    //     Confirm
    //   </Button>,
    //   <Button key="buy">Cancel</Button>,
    //   ]
      
      
    // }
  />
);

export default App;