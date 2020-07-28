import { combineReducers } from "redux";
import firstUse from "./firstuse";
import goals from "./goals";
import history from "./history";
export default combineReducers({ firstUse, goals, history });
