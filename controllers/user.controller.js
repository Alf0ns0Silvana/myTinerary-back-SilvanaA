import  User from "../models/user.js";

const controller = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();

            res.status(200).json({
                success: true,
                users: users,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: "Error fetching users",
            });
        }
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