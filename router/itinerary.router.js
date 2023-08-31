import express from "express";
import itineraryController from '../controllers/itinerary.controllers.js';

const router = express.Router();


const {getItinerary, getItineraryByCityName,  createItinerary, getItineraryById,
    updateItinerary, deleteItinerary} = itineraryController;

router.get('/', getItinerary)

router.get('/:cityName', getItineraryByCityName)

router.get('/:id', getItineraryById) 

router.post('/', createItinerary)

router.put('/:id', updateItinerary)

router.delete('/:id', deleteItinerary)


export default router;