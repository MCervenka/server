import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as actions from "../actions";
import { connect } from "react-redux";
import RenderComments from "./RenderComments";
import InputGroup from "react-bootstrap/InputGroup";
import moment from 'moment';

const textComment = "Přidat komentář";
const URL = () => {
    if (process.env.NODE_ENV === "development") { return 'ws://localhost:3030' }
    return 'wss://boiling-sands-96880.herokuapp.com'
};


class Comment extends Component {
    ws = new WebSocket(URL());
    state = { term: "" };
    componentDidMount() {
        this.props.getComments();
        this.ws.onmessage = evt => {
            let wsComment = JSON.parse(evt.data);
            this.props.handleCommentWs(wsComment);
        }
        this.ws.onclose = () => {
            this.setState({
                ws: new WebSocket(URL()),
            })
        }
    }


    onInputChange = (event) => {
        let inputValue = event.target.value;
        this.setState({ term: inputValue });
    };

    onFormSubmit = event => {
        switch (this.props.auth) {
            case null:
                return window.alert("Pro přidání komentáře je potřebné se přihlásit");
            case false:
                return window.alert("Pro přidání komentáře je potřebné se přihlásit");
            default:
                this.props.handleComment(this.state.term);
                this.ws.send(JSON.stringify({
                    comment: this.state.term,
                    id: this.props.auth.userName,
                    date: moment().format("DD.MM.YYYY hh:mm:ss")
                }));
                event.preventDefault();
                this.setState({ term: "" });
        }
    };

    render() {
        return (
            <div>
                <InputGroup className="mb-3" onSubmit={this.onInputChange}>
                    <Button variant="primary" type="submit" onClick={
                        (e) => this.onFormSubmit(e)
                    } >
                        {textComment}
                    </Button>
                    <Form.Control type="text" placeholder="napíš tvoj komentář"
                        value={this.state.term}
                        onChange={this.onInputChange} />
                </ InputGroup>

                <div>
                    <RenderComments props={this.props.comments} />
                </div>
            </div>
        );
    }
}

function mapStateToProps({ comments, auth }) {
    return {
        comments,
        auth
    };
}

export default connect(mapStateToProps, actions)(Comment);