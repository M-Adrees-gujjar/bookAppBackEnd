const { default: mongoose } = require("mongoose");
const db_conection = require("./connection.model");

const postDetailsSchema = new mongoose.Schema({
    company: String,
    jobTitle: String,
    jobLocation: String,
    addDescription: String,
    setWorkPlace: String,
    setJobTypeValue: String,
    postUserEmail: String
});

const postDetails = mongoose.model("postDetails", postDetailsSchema);

async function postDetailsModel(company, jobTitle, jobLocation, addDescription, setWorkPlace, setJobTypeValue, email) {
    try {
        await db_conection();
        const user = await postDetails({
            company: company,
            jobTitle: jobTitle,
            jobLocation: jobLocation,
            addDescription: addDescription,
            setWorkPlace: setWorkPlace,
            setJobTypeValue: setJobTypeValue,
            postUserEmail: email
        });
        await user.save();
        return {
            success: true,
            response: "Post Save SuccessFully"
        };
    } catch (error) {
        console.error("Something went wrong:", error);
        return {
            success: false,
            response: "An error occurred during saving--", error
        };
    }
}

async function getDetailsModel() {
    try {
        await db_conection()
        const data = await postDetails.find();
        return {
            success: true,
            response: data
        };
    } catch (error) {
        console.error("Something went wrong:", error);
        return {
            success: false,
            response: "An error occurred during Fetching--", error
        };
    }
}

module.exports = { postDetailsModel, getDetailsModel };
