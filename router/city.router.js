import express from "express";
import citiesController from '../controllers/cities.controllers.js';
import { isADmin } from "../middlewares/isAdmin.js";
import passport from "../middlewares/auth/passport.js";

const router = express.Router();

const {getCities, createCity, getCityById, UpdateCity, deleteCity} = citiesController;

router.get('/', getCities)
router.post('/', passport.authenticate('jwt', {session:false}), isADmin, createCity)

router.get('/:id', getCityById)
router.put('/:id',passport.authenticate('jwt', {session:false}), isADmin, UpdateCity)

router.delete('/:id',passport.authenticate('jwt', {session:false}), isADmin, deleteCity)

export default router;