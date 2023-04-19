import { useEffect } from "react";
import { useDispatch, useSelector ,} from "react-redux";

import { RootState } from "@/store";
import { ThunkDispatch } from "redux-thunk";
import { Team, TeamAction } from "@/store/actions/Teams/teamTypes";
import { fetchTeamData } from "@/store/actions/Teams/teamAction";
import { Card, Space } from "antd";


const Team=()=>{
    const dispatch:ThunkDispatch<RootState, {}, TeamAction>=useDispatch();
    useEffect(()=>{
        dispatch(fetchTeamData('https://swapi.dev/api/people'));
    },[dispatch])
    const teamData=useSelector((state:RootState)=>state.team.teamData);
    console.log(teamData)
    if (!teamData){
        return<div>Loading....</div>
    }
    return (
        <div>
        {Array.isArray(teamData) && teamData.map((team:Team)=>{ 
          return (
            <div key={team.name} className='Container'>
              <Space direction="vertical" size={16}>
              <Card style={{ width: 300 }}>  
              <p>{team.name}</p> 
              <p>{team.hair_color}</p>
              </Card>
              </Space>
            </div>
          )
        })} 
        </div>
    )
}
export default Team;