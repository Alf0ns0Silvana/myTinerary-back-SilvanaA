import { Schema, model, Types } from "mongoose";

const collection = 'users';

const schema = new Schema({
    name: { type: String, required: true},
    email:{ type: String, required: true},
    password:{ type: String, required: true},
    img: { type: String},
    role: {type: String},
    google: { type: Boolean, default: false},
    online: { type: Boolean, default: false},
    verified: { type:Boolean, default: true},
    verified_code: { type: String}
}, {
    timestamps: true 
});

let User = model(collection, schema);

export default User;
