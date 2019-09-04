import { FETCH_COMMENT } from "../actions/types";

export default function(state = [], action){

    switch(action.type){
        case FETCH_COMMENT:
            return action.payload || false;
        default:
            return state;
    }
}