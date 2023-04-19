import { ThunkDispatch } from "redux-thunk";
import {
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR,
    User,
    UserAction
} from "./userTypes"
import { AnyAction, Dispatch } from 'redux';
import { RootState } from "../..";

export const fetchUserData=(url:string)=>{
    return async (dispatch:ThunkDispatch<RootState, {}, UserAction>)=>{
    try{
        const response=await fetch(url);
        const data=await response.json();
        console.log("fetch",data)
        dispatch({
            type:FETCH_USER_DATA_SUCCESS,
            payload:data.results,
        });
        
    }catch(error){
            dispatch({type:FETCH_USER_DATA_ERROR,
                payload:error instanceof Error ? error.message:"An unknown error occured",
            });
        }
    };
};
