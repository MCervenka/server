const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
    app.post("/api/stripe/shellac", requireLogin, (req, res) => {
        stripe.charges.create({
            amount: 35000,
            currency: "CZK",
            description: "zaplatiť procedúru",
            source: req.body.id
        });
        res.send();
    });
    app.post("/api/stripe/pshine", requireLogin, (req, res) => {
        stripe.charges.create({
            amount: 25000,
            currency: "CZK",
            description: "zaplatiť procedúru",
            source: req.body.id
        });
        res.send();
    });
};
 