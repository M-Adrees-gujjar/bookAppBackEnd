const express = require('express');
const route = express.Router();
const { signUp, logIn } = require('../controllers/register_account.controller');
const { postDetails, getPostDetails , getMyPosts} = require('../controllers/postDetails.controller');
const authenticateToken = require('../controllers/jwtTokenVerify');

route.get('/', function (req, res) {
    res.status(200).send("'API is Working'")
})

route.post('/signUP', signUp);
route.post('/logIn', logIn);
route.post('/postDetails', authenticateToken, postDetails);
route.get('/getPostDetails', getPostDetails)
route.post('/getMyPosts',authenticateToken, getMyPosts);

module.exports = route;
