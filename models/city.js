import { Schema, model, Types } from "mongoose";

const collection = 'cities';

const schema = new Schema({ 
    name: { type: String, required: true},
    country: { type: String, required: true},
    img: { type: String, required: true},
    description: { type: String, required: true},
    departureDateTime: { type: String},
    user: { type: Types.ObjectId, ref: 'users'},
    Itinerary: [{ type: Types.ObjectId, ref:'itineraries'}]
}, {
    timestamps: true
})

let City = model(collection, schema)

export default City