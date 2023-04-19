import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined } from "@ant-design/icons";
import Model from "./model";

interface DataType {
  key: string;
  taskid: string;
  type: string;
  task_title: string;
  priority: string;
  status: string[];
}
function showMsg() {
  console.log("Clicked");
}

const columns: ColumnsType<DataType> = [
  {
    title: "PRIORITY",
    dataIndex: "priority",
    key: "priority",
  },
  {
    title: "TYPE",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "TASK ID",
    dataIndex: "taskid",
    key: "taskid",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "TASK TITLE",
    dataIndex: "task_title",
    key: "task_title",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    render: (_, { status }) => (
      <>
        {status.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "blocked") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <div>
          <EditOutlined />
        </div>
        {/* <EditTwoTone/> */}
        {/* <a>Edit {record.taskid}</a> */}
        <div onClick={showMsg}>
          <Model />
        </div>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    taskid: "TU001",
    type: "32",
    task_title: "New York No. 1 Lake Park",
    status: ["done"],
    priority: "1",
  },
  {
    key: "2",
    taskid: "TU002",
    type: "42",
    task_title: "London No. 1 Lake Park",
    status: ["blocked"],
    priority: "2",
  },
  {
    key: "3",
    taskid: "TU003",
    type: "32",
    task_title: "Sydney No. 1 Lake Park",
    status: ["inprogress"],
    priority: "1",
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;
