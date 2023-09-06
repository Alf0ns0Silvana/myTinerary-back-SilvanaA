import { Schema, model, Types } from "mongoose";

const collection = 'users';

const schema = new Schema({
    name: { type: String, required: true},
    email:{ type: String, required: true},
    password:{ type: String, required: true},
    img: { type: String},
    role: {type: String, required: true}
}, {
    timestamps: true 
});

let User = model(collection, schema);

export default User;
