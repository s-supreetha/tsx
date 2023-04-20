import React, { useEffect, useState } from "react";
import { Pagination, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined } from "@ant-design/icons";
import Model from "./model";
import axios from "axios";

interface IssueDataType {
  id: number;
  title: string;
  description: string;
  assigneeId: number;
  reporterId: number;
  typeId?: number;
  statusId?: number;
  priorityId?: number;
  start_date: Date;
  end_date: Date;
  epicId?: number;
}
function showMsg() {
  console.log("Clicked");
}

const columns: ColumnsType<IssueDataType> = [
  {
    title: "Task ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Priority",
    dataIndex: "priorityId",
    key: "priorityId",
  },
  {
        title: "Status",
        key: "statusId",
        dataIndex: "statusId",
      render: (status: number) => {
        let color: string;
        let text: string;
        switch (status) {
          case 1:
            color = 'red';
            text = "Todo";
            break;
          case 2:
            color = 'blue';
            text = "In Progress";
            break;
          case 3:
            color = 'green';
            text = "Done";
            break;
          default:
            color = 'gray';
        }
        return <Tag color={color}>{text}</Tag>;  
  },
},
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <div>
          <EditOutlined />
        </div>
        <div onClick={showMsg}>
          <Model />
        </div>
      </Space>
    ),
  }
];


const IssueTable: React.FC = () => {
  const pageSize = 3;
  const current = 1;
  const [issues, setIssueData] = useState([]);
  const [allIssues, setAllIssueData] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(10);
  const getDataSlice = (current: number, pageSize: number, data: IssueDataType[]) => {
    return data.slice((current - 1) * pageSize, current * pageSize);
  }

  const getDataSliceSetState = (current: number, pageSize: number, data: IssueDataType[]) => {
    setIssueData(data.slice((current - 1) * pageSize, current * pageSize));
  }
  useEffect(() => {
    let issueData = null, allIssuesData = null;
    async function getIssueData() {
      let allIssueData = await axios.get(
        "http://localhost:3002/issues/allIssueNoPagination"
      );
      console.log(allIssueData);
      setAllIssueData(allIssueData.data);
      setIssueData(getDataSlice(1, pageSize, allIssueData.data));
      setNumberOfPages(Math.ceil(allIssueData.data.length / pageSize));
    }
    if (!allIssues.length) {
      getIssueData();
    }
  }, []);
  console.log("numberOfPages", numberOfPages);
  return (
      <Table columns={columns} dataSource={issues} pagination={{defaultCurrent: 1, pageSize:pageSize, total: numberOfPages + 5, 
        onChange:(page)=>{getDataSliceSetState(page, pageSize, allIssues)} }} />
  );
};
export default IssueTable;