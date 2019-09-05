import { combineReducers} from "redux";
import authReducer from "./authReducer";
import commentReducer from "./commentReducer";
import eventReducer from "./eventReducer";

export default combineReducers({
    auth: authReducer,
    comments: commentReducer,
    events: eventReducer
});