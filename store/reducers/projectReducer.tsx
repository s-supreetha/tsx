import {
    ProjectAction,
    FETCH_PROJECT_DATA_SUCCESS,
    FETCH_PROJECT_DATA_ERROR
} from "../actions/Projects/projectTypes";
const initialState={
    projectData:null,
    error:null
};
const projectReducer=(state=initialState,action:ProjectAction)=>{
    switch(action.type){
        case FETCH_PROJECT_DATA_SUCCESS:
            // console.log('state before update',state)
            // console.log('action payload',action.payload)
            return {
                ...state,
                projectData:action.payload,
                error:null
            };
        case FETCH_PROJECT_DATA_ERROR:
            return {
                ...state,
                projectData:null,
                error:action.payload,
            }
        default:
            return state;
    }
};
export default projectReducer;