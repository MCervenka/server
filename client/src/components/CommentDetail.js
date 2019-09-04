import React from "react";
import Card from "react-bootstrap/Card";

const CommentDetail = (props) => {
    return (
        <Card style={{ width: '100%', margin: "10px 0" }}>
            <Card.Body>
                <Card.Title>{props.props.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.props.date}</Card.Subtitle>
                <Card.Text>
                {props.props.comment}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CommentDetail;