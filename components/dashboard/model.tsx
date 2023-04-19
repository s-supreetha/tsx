import React, { useState } from "react";
import { Button, Modal } from "antd";
import Warning from "./warning";
import Success from "./success";
import { DeleteOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const [modal1Open, setModal1Open] = useState(false);

  return (
    <>
      <div onClick={() => setModal2Open(true)}>
        <DeleteOutlined />
        {/* Delete */}
      </div>
      <Modal
        // title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => {
          setModal2Open(false);
          setModal1Open(true);
        }}
        onCancel={() => setModal2Open(false)}
        okText="Confirm"
        cancelText="Cancel"
      >
        <Warning />
      </Modal>
      <Modal centered open={modal1Open} onOk={() => setModal1Open(false)}>
        <Success />
      </Modal>
    </>
  );
};

export default App;
