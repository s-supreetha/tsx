import { ThunkDispatch } from "redux-thunk";
import {
    FETCH_TEAM_DATA_SUCCESS,
    FETCH_TEAM_DATA_ERROR,
    Team,
    TeamAction
} from "./teamTypes"
import { AnyAction, Dispatch } from 'redux';
import { RootState } from "../..";

export const fetchTeamData=(url:string)=>{
    return async (dispatch:ThunkDispatch<RootState, {}, TeamAction>)=>{
    try{
        const response=await fetch(url);
        const data=await response.json();
        dispatch({
            type:FETCH_TEAM_DATA_SUCCESS,
            payload:data.results,
        });
        console.log(data)
        
    }catch(error){
            dispatch({type:FETCH_TEAM_DATA_ERROR,
                payload:error instanceof Error ? error.message:"An unknown error occured",
            });
        }
    };
};
