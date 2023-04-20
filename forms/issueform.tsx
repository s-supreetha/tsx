import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
// import TextArea from 'antd/es/input/TextArea';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import styles from "../styles/Form.module.css";

type LayoutType = Parameters<typeof Form>[0]['layout'];

const IssueForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal' ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;

    const [statuses,setStatus]=useState([])
    const [priorities,setPriority]=useState([])
    const [types,setType]=useState([])
  useEffect(()=>{
    let statusData=null,priorityData=null,typeData=null
    async function getStatus(){
        let statusData = await axios.get('http://localhost:3002/status')
        setStatus(statusData.data)
    };
    async function getPriority(){
        let priorityData = await axios.get('http://localhost:3002/priority')
        setPriority(priorityData.data)
    };
    async function getType(){
        let typeData = await axios.get('http://localhost:3002/type')
        setType(typeData.data)
    };
    if(!statuses.length) {
        getStatus()
    }
    if(!types.length) {
        getType()
    }
    if(!priorities.length) {
        getPriority()
    }
}) 
  return (
    <>
     <Form className='formHU'>
       <div id="IssueAssigneeStatus">
            <div className="formHUTitle" >
                <div className={styles.formtitle}>
                    Create An Issue
                </div>
            </div>
            <br />
            <div className='subTitle'>Title</div>
            <Input className='inpField' placeholder="Enter the issue" />
         
            <br/>
             <br/>
            <div className='subTitle'>Description</div>
             <textarea className={styles.textareadesc} placeholder="Enter the description" />
             <br/>
             <br/>
            <div className="row">
                <div className='col-6'>
                    <div className='subTitle'>Assignee</div>
                    <Input type='text' className='inpField2' placeholder="Assign the task" />
                </div>
                <div className='col-6'>
                    <div className='subTitle'>Status</div>
                    <select className={styles.inpfield} id='statusDropdown' name='Status' placeholder="Enter the status of the task" >
                        <>
                            {statuses? statuses.map((statusDetail)=><option  value={statusDetail.id} selected>{""+statusDetail.type}</option>
):<></> }
                        </>
                    </select>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className='col-4'>
                    <div className='subTitle'>Type</div>
                    <select className={styles.inpfield} id='typeDropdown' name='Type' placeholder="Enter the type of the task" >
                        <>
                            {types? types.map((typeDetail)=><option  value={typeDetail.id} selected>{""+typeDetail.type}</option>):<></> }
                        </>
                    </select>
                </div>
                <div className='col-4'>
                    <div className='subTitle'>Priority</div>
                    <select className={styles.inpfield} id='priorityDropdown' name='priority' placeholder="Enter the priority" >
                        <>
                            {priorities? priorities.map((priorityDetail)=><option  value={priorityDetail.id} selected>{""+priorityDetail.type}</option>):<></> }
                        </>
                    </select>
                </div>
                <div className='col-4'>
                    <div className='subTitle'>Story Points</div>
                    <Input className='inpField2' type='number' min={1} required/> 
                </div>
            </div>
            <br/>
            <div className="row">
                <div className='col-6'>
                    <div className='subTitle'>Start Date</div>
                    <Input type='date' className='inpField2' placeholder="Choose the start date" />
                </div>
                <div className='col-6'>
                    <div className='subTitle'>End Date</div>
                    <Input type='date' className='inpField2' placeholder="Choose the end date" />
                </div>
            </div>

            <br/>
            <div className='row'>
                <div className='col-6'>
                    <button className={styles.resetbutton} type='reset' value='Reset'>Reset</button>
                </div>
                <div className='col-6'>
                    <button className={styles.submitbutton} type='reset' value='Reset'>Submit</button>
                </div>
            </div>
       </div>
     </Form>
     </>
  );
};

export default IssueForm;