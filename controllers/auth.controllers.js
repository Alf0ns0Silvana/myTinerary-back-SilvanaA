import crypto from 'crypto';
import bcryptjs from 'bcryptjs';
import User from '../models/user.js';
import jwt  from 'jsonwebtoken';
import { verify } from '../helpers/google_verify.js';

const controller = {
    signUp: async (req, res, next) => {
        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex')
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
            
            const user = await User.create(req.body)

            const token = jwt.sign(
                { id: user._id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    img: user.img,
                },
                process.env.SECRET,
                { expiresIn: "10h" }
                )
                
                user.password = null
                return res.status(201).json({
                    succes: true,
                    message: 'User registred.',
                    response: {
                        token,
                        user
                    }
                })
            } catch (error) {  
            console.error(error);
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
            
            const token = jwt.sign(
                { id: user._id,
                  email: user.email,
                  name: user.name,
                  img: user.img
                },
                process.env.SECRET,
                { expiresIn: "10h" }
            )

            user.password = null
            
            return res.status(200).json({
                succes: true,
                message: 'User logged',
                response: {
                    token,
                    user
                }
            })
        } catch (error) {
            res.status(500).json({
                succes: false,
                message: 'Error authenticating user.'
            })
        }
    },
    googleSignin: async (req, res, next) => {
        const { token_id } = req.body;
        try {
            const {name, email, img} = await verify(token_id);

            let user = await User.findOne({email});

            if(!user){ //(!user) si no existe..
                const data = { //lo creo
                    name,
                    email,
                    img,
                    password: bcryptjs.hashSync(process.env.STANDAR_PASSWORD, 10),
                    google: true,
                    verified_code: crypto.randomBytes(10).toString('hex')              
                }
                user = await User.create(data)
            } // esto en caso de que el user no exista en mi base de datos 
            // si existe lo logueo
            user.online = true;
            await user.save()

            const token = jwt.sign(
                { id: user._id,
                    name: user.name,
                    lastname: user.lastname,
                    email: user.email,
                    img: user.img,
                },
                process.env.SECRET,
                { expiresIn: "10h" }
            )

            res.status(200).json({
                success: true,
                message: 'Google Sign-In successful.',
                response: {
                    token,
                    user
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                success: false,
                message: 'Error authenticating user.',
                error: error.message
            });
        }
    },
    signOut: async (req, res, next) => {
        try {
            const user = await User.findOneAndUpdate(
                {email: req.user.email},
                {online:false},
                {new: true}
            ) 
            user.online = false;
            await user.save()

            return res.status(200).json({
                success: true,
                message:'User out'
            }) 


        } catch (error) {
                res.status(500).json({
                succes: false,
                message: 'Error authenticating user.'
            })
        }
    },
    token: async (req, res, next ) => {
    const {user} = req
        try {
            return res.status(200).json({
                user: {
                    name: user.name,
                    email:user.email,
                    img: user.img
                }
            })
        } catch (error) {
            next(error)
        }
    }
}

export default controller;