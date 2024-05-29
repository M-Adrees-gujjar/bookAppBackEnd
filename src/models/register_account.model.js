const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const db_conection = require('./connection.model');

const signUP_schema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

const user_detials = mongoose.model("user_detials", signUP_schema);

async function signUP_DB(username, email, password, confirm_password) {
    try {
        await db_conection()
        const user_find = await user_detials.findOne({ email: email });

        if (user_find) {
            console.log("user------", user_find);
            return "Email already Exist"
        }

        const user = await user_detials({
            username: username,
            email: email,
            password: password
        });
        await user.save();
        return "SignUP SuccessFull";
    } catch (error) {
        console.log("Some thing Went Wrong---", error);
        return "Some thing Went Wrong---", error;
    }
}

async function logIn_DB(email, password) {
    try {
        await db_conection();
        const user = await user_detials.findOne({ email, password });
        console.log("LogIn user find-----", user);
        if (user) {
            const token = jwt.sign(
                { email },
                process.env.SECRET_KEY,
                { expiresIn: '365d' }
            );

            return {
                token,
                response: "Login Successful"
            };
        } else {
            return {
                response: "Email or Password are not correct"
            };
        }
    } catch (error) {
        console.error("Something went wrong:", error);
        return {
            response: "An error occurred during login--", error
        };
    }
}

module.exports = { signUP_DB, logIn_DB };