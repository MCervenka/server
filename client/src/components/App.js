import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Landing from "./Landing";
import CommentList from "./CommentList";
import Gallery from "./Gallery";
import MyCalendar from "./MyCalendar";
import Pshine from "./Pshine";
import CNDShellac from './CNDShellac';
import Jessica from './Jessica';

const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {


    render() {
        return (
            <div >
                <BrowserRouter>
                    <Container style={{ backgroundColor: "white" }}>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/appointment" component={MyCalendar} />
                        <Route path="/surveys/new" component={SurveyNew} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/comments" component={CommentList} />
                        <Route exact path="/pshine" component={Pshine} />
                        <Route exact path="/cndshellac" component={CNDShellac} />
                        <Route exact path="/jessica" component={Jessica} />
                    </Container>
                </BrowserRouter>
            </div>
        );
    }
}
export default App;