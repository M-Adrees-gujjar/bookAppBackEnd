const express = require('express');
const route = express.Router();
const { signUp, logIn } = require('../controllers/register_account.controller');
const { postDetails, getPostDetails, getMyPosts  , postDetailsDelete} = require('../controllers/postDetails.controller');
const authenticateToken = require('../controllers/jwtTokenVerify');
const postProfileDetails = require('../controllers/postProfileDetails.controller');

route.get('/', function (req, res) {
    res.status(200).send("'API is Working'")
})

route.post('/signUP', signUp);
route.post('/logIn', logIn);
route.post('/postDetails', authenticateToken, postDetails);
route.post('/postDetailsDelete', postDetailsDelete);
route.get('/getPostDetails', getPostDetails)
route.post('/getMyPosts', authenticateToken, getMyPosts);
route.post('./postProfileDetails',authenticateToken,postProfileDetails);

module.exports = route;
