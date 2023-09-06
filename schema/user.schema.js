import Joi from 'joi';

export const createUserSchema = Joi.object({
    email: Joi.string().required().email({minDomainSegments : 2}),
    password: Joi.string().required().min(8).max(25).alphanum(),//.regex()
    name: Joi.string().required().min(2).max(25),//.regex(Solo caract alfabeticos)
    role: Joi.string().required(),
    img: Joi.string().uri()
})  