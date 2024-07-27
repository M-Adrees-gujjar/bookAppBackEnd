const postProfileDetail = require('../models/postProfileDetails.model');

function postProfileDetails(req, res) {
    const result = req.body;
    const user = req.user;

    console.log("res---", result, "----", user);

    let response_value = postProfileDetail(result.summary, result.skill, result.euducation, result.language, user.email);

    if (response_value.success) {
        res.status(200).send(response_value);
    } else {
        res.status(400).send(response_value);
    }
}

module.exports = postProfileDetails;
