import { Schema, model, Types } from "mongoose";

const collection = 'cities';

const schema = new Schema({ 
    name: { type: String, required: true},
    country: { type: String, required: true},
    img: { type: String, required: true},
    description: { type: String, required: true},
    date: { type: Date},
    user: { type: Types.ObjectId, ref: 'users'}
}, {
    timesStapms: true
})

let City = model(collection, schema)

export default City