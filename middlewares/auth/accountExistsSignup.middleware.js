import User from "../../models/user.js";

export const accountExistsSignup = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        return res.status(400).json({
            succes:  false,
            message: 'User already registered'
        })
    }
    return next()
}