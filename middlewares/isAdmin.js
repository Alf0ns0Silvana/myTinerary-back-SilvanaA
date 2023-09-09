import User from "../models/user.js";


export const isADmin = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
    
            if (user.role == 'admin') {
                return next()
        } 
            return res.status(401).json({
                succes: false,
                message: 'User unauthorized to ... city'
        })   
        
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message:'Internal server error isAdmin middleware'
        })
    }
}