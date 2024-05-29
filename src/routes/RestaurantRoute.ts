import express from "express";
import { param } from "express-validator";
import RestaurantController from "../Controllers/RestaurantController";


const router = express.Router();


// api/restaurant/search
router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City parameter must be a valid string"), RestaurantController.searchRestaurant)

export default router;