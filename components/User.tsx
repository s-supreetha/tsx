import { useEffect } from "react";
import { useDispatch, useSelector ,} from "react-redux";
import { fetchUserData } from "../store/actions/Users/userActions";
import { RootState } from "@/store";
import { ThunkDispatch } from "redux-thunk";
import { UserAction } from "@/store/actions/Users/userTypes";
import { User } from "@/store/actions/Users/userTypes";
import { Card, Space } from "antd";

const User=()=>{
    const dispatch:ThunkDispatch<RootState, {}, UserAction>=useDispatch();
    useEffect(()=>{
        dispatch(fetchUserData('https://swapi.dev/api/people'));
    },[dispatch])
    let userData=useSelector((state:RootState)=>state.user.userData);
    if (!userData){
        return<div>Loading....</div>
    }
    console.log("main",userData)
    return (
        <div>
        {Array.isArray(userData) && userData.map((user:User)=>{ 
          return (
            <div key={user.name} className='Container'>
              <Space direction="vertical" size={16}>
              <Card style={{ width: 300 }}>  
              <p>{user.name}</p> 
              <p>{user.hair_color}</p>
              </Card>
              </Space>
            </div>
          )
        })} 
        </div>
    )
}
export default User;