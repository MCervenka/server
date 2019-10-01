import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as actions from "../actions";
import { connect } from "react-redux";

class CommentDetail extends Component {
    renderAdmin() {
        if (this.props.auth._id === this.props.comment.databaseId) {
            return <Button variant="danger" onClick={this.deleteComment}>Delete</Button>;
        } else { return; }
    }
    deleteComment = () => {
        this.props.deleteComment(this.props.comment._id)
    }
    render() {
        return (
            <Card style={{ width: '100%', margin: "10px 0" }}>
                <Card.Body>
                    <Card.Title>{this.props.comment.id}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{this.props.comment.date}</Card.Subtitle>
                    <Card.Text>
                        {this.props.comment.comment}
                    </Card.Text>
                    {this.renderAdmin()}
                </Card.Body>
            </Card>
        );
    }

}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(CommentDetail);