import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as actions from "../actions";
import { connect } from "react-redux";
import RenderComments from "./RenderComments";
import InputGroup from "react-bootstrap/InputGroup";
const URL = 'ws://boiling-sands-96880.herokuapp.com';

class Comment extends Component {
    ws = new WebSocket(URL);
    state = { term: "" };
    componentDidMount() {
        this.props.getComments();     
        this.ws.onmessage = evt => {
            if(evt.data === "newComment"){
                this.props.getComments();
            }
        }     
        this.ws.onclose = () => {
            this.setState({
              ws: new WebSocket(URL),
            })
        }
    }


    onInputChange = (event) => {
        let inputValue = event.target.value;
        this.setState ( { term: inputValue });
    };

    onFormSubmit = event => {
        switch (this.props.auth){
            case null:
                return window.alert("Pro přidání komentáře je potřebné se přihlásit");
            case false:
                return window.alert("Pro přidání komentáře je potřebné se přihlásit");
            default:     
                this.props.handleComment(this.state.term);
                this.ws.send("newComment");
                event.preventDefault();
                this.setState ({ term: "" });
        }
    };

    render () {
       
        return(
            <div>
                <InputGroup className="mb-3" onSubmit={this.onInputChange}>
                        <Button variant="primary" type="submit" onClick={
                            (e) => this.onFormSubmit(e)
                            } >
                            Pridat komentar 
                        </Button> 
                        <Form.Control type="text" placeholder="nap&iacute;s tvoj koment&aacute;r"
                        value={this.state.term}
                        onChange={this.onInputChange}/>
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