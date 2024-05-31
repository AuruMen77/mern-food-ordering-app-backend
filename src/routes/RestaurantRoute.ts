import express from "express";
import { param } from "express-validator";
import RestaurantController from "../Controllers/RestaurantController";


const router = express.Router();


// api/restaurant/
router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City parameter must be a valid string"), RestaurantController.searchRestaurant)
router.get("/:restaurantId", param("restaurantId").isString().trim().notEmpty().withMessage("Restaurant ID parameter must be a valid string"), RestaurantController.getRestaurant)
export default router;