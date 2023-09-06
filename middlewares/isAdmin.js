import User from "../models/user.js";


export const isADmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.query.userId)
    
            if (user.role == 'admin') {
                return next()
        } 
            return res.status(401).json({
                succes: false,
                message: 'User unauthorized to delete city'
        })   
        
    } catch (error) {
        return res.status(500).json({
            succes: false,
            message:'Internal server error isAdmin middleware'
        })
    }
}