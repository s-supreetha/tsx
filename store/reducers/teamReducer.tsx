import {
    TeamAction,
    FETCH_TEAM_DATA_SUCCESS,
    FETCH_TEAM_DATA_ERROR
} from "../actions/Teams/teamTypes";
const initialState={
    teamData:null,
    error:null
};
const teamReducer=(state=initialState,action:TeamAction)=>{
    switch(action.type){
        case FETCH_TEAM_DATA_SUCCESS:
            // console.log('state before update',state)
            // console.log('action payload',action.payload)
            return {
                ...state,
                teamData:action.payload,
                error:null
            };
        case FETCH_TEAM_DATA_ERROR:
            return {
                ...state,
                teamData:null,
                error:action.payload,
            }
        default:
            return state;
    }
};
export default teamReducer;