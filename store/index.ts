import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { UserAction, UserState } from "./actions/Users/userTypes";
import userReducer  from "./reducers/userReducer";
import { TeamState } from "./actions/Teams/teamTypes";
import teamReducer from "./reducers/teamReducer";
import projectReducer from "./reducers/projectReducer";
import { ProjectState } from "./actions/Projects/projectTypes";
 
const rootReducer=combineReducers(
    {
        user: userReducer,
        team:teamReducer,
        project:projectReducer,
    }
);
export type RootState = {
    user: UserState;
    team:TeamState;
    project:ProjectState
    // add other state types here
  };
const initialState={};
const store=createStore(rootReducer,applyMiddleware(thunk as ThunkMiddleware<RootState,UserAction>))


export default store;

// import { combineReducers } from "redux";
// import userReducer, { UserState } from "./userReducer";
// // import other reducers as needed

// const rootReducer = combineReducers({
//   user: userReducer,
//   // add other reducers here
// });



// export default rootReducer;
