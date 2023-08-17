import  User from "../models/user.js";

const controller = {
    getUsers: (req, res) => {
        res.json({
            user: 'Silvana A'
        });
    },
    createUsers: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            
            return res.status(200).json({
                success:true,
                message:"Success user created"
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({
                success:false,
                message: "Error creating user"
            })
        }
    },
    deleteUsers: () => {},
}

export default controller;