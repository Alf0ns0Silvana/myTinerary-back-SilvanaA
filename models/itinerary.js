import { Schema, model, Types } from "mongoose";

const collection = 'itineraries';

const schema = new Schema({ 
    name: { type: String, required: true},
    price: { type: Number, required: true},
    duration: { type: Number, required: true},
    hashtags: [{ type: String, required: true}],
    user: { type: Types.ObjectId, ref: 'users'},
    city: { type: Types.ObjectId, ref: 'cities'},
    comments: [{ type:String, required: true}]
}, {
    timestamps: true
})

let Itinerary = model(collection, schema)

export default Itinerary
