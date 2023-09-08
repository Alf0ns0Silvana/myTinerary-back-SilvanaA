import User from "../../models/user.js";


export const accountExistsSignin = async (req, res, next) => {
    const user = await User.findOne({email: req.body.email})
    if (user) {
        req.user = {
            id: user._id,
            name : user.name,
            email: user.email,
            password: user.password,
            img: user.img,
            role: user.role,
            online: user.online,
            verified: user.verified
        }
        return next()
    }
    return res.status(400).json({
        succes: false,
        message: 'User does not exist'
    })
}