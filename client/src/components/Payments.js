import React, {Component} from "react";
import StripeCheckOut from "react-stripe-checkout";
import Button from "react-bootstrap/Button";
import axios from "axios";

class Payments extends Component {
    newPayment = async (token) => {
        if (this.props.amount === 350){
           await axios.post("/api/stripe/shellac", token)
        } else {await axios.post("/api/stripe/pshine", token)}       
        this.props.reserve();
    }
    render() {
        return(
            <StripeCheckOut
                name="Katkin salón"
                description="Zaplatiť procedúru" 
                amount={this.props.amount*100}
                currency='CZK'
                token={token => this.newPayment(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button variant="success">Zaplatit kartou</Button>
            </ StripeCheckOut>
        );
    }
}

export default Payments;