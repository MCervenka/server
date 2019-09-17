import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as actions from "../actions";
import { connect } from "react-redux";
import RenderComments from "./RenderComments";
import InputGroup from "react-bootstrap/InputGroup";


class Comment extends Component {
    state = { term: "" };
    componentDidMount() {
        this.props.getComments();
    }
    onInputChange = (event) => {
        let inputValue = event.target.value;
        this.setState ( { term: inputValue });
    };

    onFormSubmit = event => {
        this.props.handleComment(this.state.term);
        event.preventDefault();
        this.setState ({ term: "" })

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

function mapStateToProps({ comments }) {
    return { comments };
}

export default connect(mapStateToProps, actions)(Comment);