import { Schema, model, Types } from "mongoose";

const collection = 'users';

const schema = new Schema({
    name: { type: String, required: true},
    img: { type: String}
}, {
    timestamps: true 
});

let User = model(collection, schema);

export default User;
