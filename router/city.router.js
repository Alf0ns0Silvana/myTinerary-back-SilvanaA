import express from "express";
import citiesController from '../controllers/cities.controllers.js';

const router = express.Router();

const {getCities, createCity, getCityById, UpdateCity, deleteCity} = citiesController;

router.get('/', getCities)
router.post('/', createCity)

router.get('/:id', getCityById)
router.put('/:id', UpdateCity)

router.delete('/:id', deleteCity)

export default router;