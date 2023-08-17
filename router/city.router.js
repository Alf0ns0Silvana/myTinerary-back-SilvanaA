import express from "express";
import citiesController from '../controllers/cities.controllers.js';

const router = express.Router();

const {getCities, createCity, getCityById} = citiesController;

router.get('/', getCities)

router.get('/:id', getCityById)

router.post('/', createCity)

export default router;