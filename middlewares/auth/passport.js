import User from "../../models/user.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
    new Strategy(
        {
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:process.env.SECRET
        },
        async (jwt_payload, done) => {
            // console.log(jwt_payload);
            try{
                const user = await User.findOne({ _id : jwt_payload.id }, '-password');

                if(user){
                 return  done(null, user)
                } else {
                    return done(null, false)
                } 

            } catch (error){
                console.log(error)
                return done (error,false)
            }
        }
    )
)
