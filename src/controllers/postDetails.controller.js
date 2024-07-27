const {
    postDetailsModel,
    getDetailsModel,
    getMyPostsModel,
    postDetailsDeleteModel,
} = require("../models/postDetails.model");

async function postDetails(req, res) {
    let result = req.body;
    let email = req.user.email;
    let resValue = await postDetailsModel(
        result.company,
        result.jobTitle,
        result.jobLocation,
        result.addDescription,
        result.setWorkPlace,
        result.setJobTypeValue,
        result.postTime,
        email
    );
    if (resValue.success) {
        res.status(200).send({
            response: resValue.response,
        });
    } else {
        res.status(500).send({
            response: res.response,
        });
    }
}

async function postDetailsDelete(req, res) {
    let result = req.body;
    let resValue = await postDetailsDeleteModel(result.id);
    if (resValue.success) {
        res.status(200).send({
            response: resValue.response,
        });
    } else {
        res.status(500).send({
            response: res.response,
        });
    }
}

async function getPostDetails(req, res) {
    let result = await getDetailsModel();
    if (result.success) {
        res.status(200).send(result);
    } else {
        res.status(400).send(result);
    }
}

async function getMyPosts(req, res) {
    const result = req.user;
    let response_value = await getMyPostsModel(result.email);
    if (response_value.success) {
        res.status(200).send(response_value);
    } else {
        res.status(400).send(response_value);
    }
}

module.exports = { postDetails, getPostDetails, getMyPosts, postDetailsDelete };
