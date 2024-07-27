const { default: mongoose } = require("mongoose");
const db_conection = require("./connection.model");

const postProfileSchema = new mongoose.Schema({
    summary: String,
    skill: String,
    euducation: String,
    language: String,
    email: String
});

const postProfileDetail = mongoose.model("postProfileDetail", postProfileSchema);

async function profileDetailModel(summary, skill, euducation, language, email) {
    try {
        await db_conection();
        const user = await postProfileDetail({
            summary: summary,
            skill: skill,
            euducation: euducation,
            language: language,
            email: email
        });
        await user.save();
        return {
            success: true,
            response: "Profile Save SuccessFully"
        };
    } catch (error) {
        console.error("Something went wrong:", error);
        return {
            success: false,
            response: "An error occurred during saving Profle --", error
        };
    }
}



module.exports = profileDetailModel;