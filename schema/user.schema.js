import Joi from 'joi';

export const createUserSchema = Joi.object({
    email: Joi.string().required().email({minDomainSegments : 2})
    .message('Email adress invalid.'),
    password: Joi.string().required().min(8).max(25).alphanum()
    .message('Password must be min 8 to max 25 characthers.'),
    name: Joi.string(),
    lastname: Joi.string().max(25)
    .message('Lastname must be max 25 characthers.'),
    role: Joi.string(),
    img: Joi.string().uri(),
    select: Joi.string().valid('Argentina', 'Brasil', 'España', 'Rusia', 'China', 'Colombia', 'México', 'Estados Unidos')
})  