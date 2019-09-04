import React from "react";
import CommentDetail from "./CommentDetail";


const RenderComments = (props) =>{
        if (props.props.length === 0) {

            return <div></div>;
        } else{
            const allComments = props.props.map((comment, index) => {
            return (
                <div key={index}>
                    <CommentDetail props={comment} />
                </div>);
            }).reverse();
            
             return <div>{allComments}</div>;
        }
       
    };
    



export default RenderComments; 