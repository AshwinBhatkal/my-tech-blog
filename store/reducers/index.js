import { combineReducers } from "redux";
import toggleNavReducer from "./toggleNavReducer";

const rootReducer = combineReducers({ toggleNavReducer });

export default rootReducer;
