import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import User from '../models/user.js';

const controller = {
    signUp: async (req, res, next) => {
        try { 
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10)

            const user = await User.create(req.body)
            return res.status(201).json({
                succes: true,
                message: 'User registred.'
            })
        } catch (error) {  
            res.status(500).json({
                succes: false,
                message: 'Error registering user.'
            })
        }
    },

    signIn: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online: true},
                {new: true}
            )
            
            user.password = null
            
            return res.status(200).json({
                succes: true,
                message: 'User logged',
                response: {
                    user,
                    // token
                }
            })
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: 'Error authenticating user.'
            })
        }
    }
}

export default controller;