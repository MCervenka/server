import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Landing from "./Landing";
import CommentList from "./CommentList";

const Appointment = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Gallery = () => <h2>Gallery</h2>

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
        this.props.getComments();
    }

    render(){
        return (
            <div>
                <BrowserRouter>
                    <Container style={{backgroundColor: "white"}}>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact  path="/appointment" component={Appointment} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/comments" component={CommentList} />
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}
export default connect(null, actions)(App);