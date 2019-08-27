import React, {Component} from "react";
import StripeCheckOut from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";
import Button from "react-bootstrap/Button";

class Payments extends Component {
    render() {

        return(
            <StripeCheckOut
                name="Katkin salon"
                description="Zaplatit za proceduru" 
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button variant="success">Dob&iacute;t kredity</Button>
            </ StripeCheckOut>
        );
    }
}

export default connect (null, actions)(Payments);