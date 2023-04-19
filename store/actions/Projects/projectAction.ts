import { ThunkDispatch } from "redux-thunk";
import {
    FETCH_PROJECT_DATA_SUCCESS,
    FETCH_PROJECT_DATA_ERROR,
    Project,
    ProjectAction
} from "./projectTypes"
import { AnyAction, Dispatch } from 'redux';
import { RootState } from "../..";

export const fetchProjectData=(url:string)=>{
    return async (dispatch:ThunkDispatch<RootState, {}, ProjectAction>)=>{
    try{
        const response=await fetch(url);
        const data=await response.json();
        dispatch({
            type:FETCH_PROJECT_DATA_SUCCESS,
            payload:data.results,
        });
        console.log(data)
        
    }catch(error){
            dispatch({type:FETCH_PROJECT_DATA_ERROR,
                payload:error instanceof Error ? error.message:"An unknown error occured",
            });
        }
    };
};
