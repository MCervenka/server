import { FETCH_COMMENTS, POST_COMMENT, DELETE_COMMENT } from "../actions/types";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload || false;
        case POST_COMMENT:
            return [...state, action.payload];
        case DELETE_COMMENT:
            return state.filter(element => element._id !== action.payload);
        default:
            return state;
    }
}