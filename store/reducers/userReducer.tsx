import {
    UserAction,
    FETCH_USER_DATA_SUCCESS,
    FETCH_USER_DATA_ERROR
} from "../actions/Users/userTypes";
const initialState={
    userData:null,
    error:null
};
const userReducer=(state=initialState,action:UserAction)=>{
    switch(action.type){
        case FETCH_USER_DATA_SUCCESS:
            // console.log('state before update',state)
            // console.log('action payload',action.payload)
            return {
                ...state,
                userData:action.payload,
                error:null
            };
        case FETCH_USER_DATA_ERROR:
            return {
                ...state,
                userData:null,
                error:action.payload,
            }
        default:
            return state;
    }
};
export default userReducer;