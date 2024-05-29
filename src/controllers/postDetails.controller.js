const { postDetailsModel, getDetailsModel } = require('../models/postDetails.model');

async function postDetails(req, res) {
    let result = req.body;
    let email = req.user.email;
    let resValue = await postDetailsModel(result.company, result.jobTitle, result.jobLocation, result.addDescription, result.setWorkPlace, result.setJobTypeValue, email);
    if (resValue.success) {
        res.status(200).send({
            response: resValue.response
        })
    } else {
        res.status(500).send({
            response: res.response
        })
    }
}

async function getPostDetails(req, res) {
    let result = await getDetailsModel()
    if (result.success) {
        res.status(200).send(result);
    } else {
        res.status(400).send(result);
    }
}

module.exports = { postDetails, getPostDetails }