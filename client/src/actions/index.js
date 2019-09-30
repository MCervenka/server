import axios from "axios";
import { FETCH_USER, FETCH_COMMENT, FETCH_EVENTS, POST_COMMENT, POST_EVENT } from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get("/api/current_user")
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleComment = (commentNew) => async dispatch => {
    const res = await axios.post("/api/comment", { commentNew: commentNew });
    dispatch({ type: POST_COMMENT, payload: res.data });
};

export const handleCommentWs = (commentNew) => dispatch => {
    dispatch({ type: POST_COMMENT, payload: commentNew });
};

export const getComments = () => async dispatch => {
    const res = await axios.get("/api/get/comments");
    dispatch({ type: FETCH_COMMENT, payload: res.data })
};

export const handleEvent = (event) => async dispatch => {
    const res = await axios.post("/api/event", { event: event });
    dispatch({ type: POST_EVENT, payload: res.data })
};

export const handleEventWS = (event) => dispatch => {
    dispatch({ type: POST_EVENT, payload: event })
};

export const getEvents = () => async dispatch => {
    const res = await axios.get("/api/get/event");
    dispatch({ type: FETCH_EVENTS, payload: res.data })
};