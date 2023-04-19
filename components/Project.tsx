import { useEffect } from "react";
import { useDispatch, useSelector ,} from "react-redux";
import { fetchProjectData } from "../store/actions/Projects/projectAction";
import { RootState } from "@/store";
import { ThunkDispatch } from "redux-thunk";
import { Project, ProjectAction } from "@/store/actions/Projects/projectTypes";
import { Card, Space } from "antd";

const Project=()=>{
    const dispatch:ThunkDispatch<RootState, {}, ProjectAction>=useDispatch();
    useEffect(()=>{
        dispatch(fetchProjectData('https://swapi.dev/api/people'));
    },[dispatch])
    const projectData=useSelector((state:RootState)=>state.project.projectData);
    console.log(projectData)
    if (!projectData){
        return<div>Loading....</div>
    }
    return (
        <div>
        {Array.isArray(projectData) && projectData.map((project:Project)=>{ 
          return (
            <div key={project.name} className='Container'>
              <Space direction="vertical" size={16}>
              <Card style={{ width: 300 }}>  
              <p>{project.name}</p> 
              <p>{project.hair_color}</p>
              </Card>
              </Space>
            </div>
          )
        })} 
        </div>
    )
}
export default Project;