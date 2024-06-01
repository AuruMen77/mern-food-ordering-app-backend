import express, { Router } from "express";
import { jwtCheck, jwtParse } from "../Middleware/Auth";
import OrderController from "../Controllers/OrderController";

const router = express.Router();

router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, OrderController.createCheckoutSession);
router.post("/checkout/webhook", OrderController.stripeWebhookHandler);
router.get("/", jwtCheck, jwtParse, OrderController.getMyOrders);
export default router;