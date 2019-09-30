import { FETCH_EVENTS, POST_EVENT } from "../actions/types";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_EVENTS:
            return action.payload || false;
        case POST_EVENT:
            return [...state, action.payload];
        default:
            return state;
    }
}