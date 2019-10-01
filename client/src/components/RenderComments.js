import React from "react";
import CommentDetail from "./CommentDetail";


const RenderComments = (props) => {
    if (props.comments.length === 0) {

        return <div></div>;
    } else {
        const allComments = props.comments.map((comment, index) => {
            return (
                <div key={index}>
                    <CommentDetail comment={comment} />
                </div>);
        }).reverse();

        return <div>{allComments}</div>;
    }

};




export default RenderComments; 