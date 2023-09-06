import express from "express";
import citiesController from '../controllers/cities.controllers.js';
import { isADmin } from "../middlewares/isAdmin.js";

const router = express.Router();

const {getCities, createCity, getCityById, UpdateCity, deleteCity} = citiesController;

router.get('/', getCities)
router.post('/', isADmin, createCity)

router.get('/:id', getCityById)
router.put('/:id', isADmin, UpdateCity)

router.delete('/:id', isADmin, deleteCity)

// create-update-delete solo se ejecuta si el middleware isAdmin verifica que el user sea admin.

export default router;