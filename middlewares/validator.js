export  const validator = (schema) => [
    (req, res, next) => {
        const validation =  schema.validate(req.body, {abortEarly:false});
// En caso de error responde con array de todos los mensajes 
        if(validation.error){
            return res.status(400).json({
                succes: false,
                message: validation.error.details.map(error => error.message)
            })
// En caso de exito, pasa al sig middle
        } return next()
    }
] // Validator sera una funcion que retorna un array q dentro tiene el middleware 
// En validation valido el esquema que esta dinámico, lo que viene por body
