const { signupService } = require("../services/user.service");

exports.signup = async (req, res) => {
    try {
        console.log("hello");
        const user = await signupService(req.body);

        res.status(200).json({
            status: "success",
            message: "successfully signed up",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.login = async (req, res) => {

};
exports.getMe = async (req, res) => {

};