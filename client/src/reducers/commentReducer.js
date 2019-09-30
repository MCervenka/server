import { FETCH_COMMENT, POST_COMMENT } from "../actions/types";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_COMMENT:
            return action.payload || false;
        case POST_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}