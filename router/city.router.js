import express from "express";
import citiesController from '../controllers/cities.controllers.js';

const router = express.Router();

router.get('/', citiesController.getCities)

export default router;