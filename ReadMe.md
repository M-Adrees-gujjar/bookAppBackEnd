# Register Account

username
email(email should be unique)
password
confirm_password(password and confirm password should match)

# LogIn Account

email
password

# -------------------

# logIn Check

{
"email" : "Youremail@gmail.com",
"password": "123"
}

# SignUp Check

{
"username" : "hello",
"email" : "Youremail@gmail.com",
"password": "123",
"confirm_password" : "123"
}





        // if (password == confirm_password) {
        //     const user = await user_detials.find({
        //         email: email,
        //         password: password
        //     });
        //     if (user.length == 0) {
        //         const user = await user_detials({
        //             username: username,
        //             email: email,
        //             password: password
        //         });
        //         await user.save();
        //         return "SignUP SuccessFull"
        //     } else {
        //         console.log("Email already Exist");
        //         return "Email already Exist"
        //     }
        // } else {
        //     console.log("Password Does not Match with Confirm Password");
        //     return "Password Does not Match with Confirm Password";
        // }