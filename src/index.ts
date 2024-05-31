import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";
import {v2 as cloudinary} from "cloudinary";
import myRestaurantRoute from "./routes/myRestaurantRoute";
import restaurantRoute from "./routes/RestaurantRoute";
import orderRoute from "./routes/OrderRoute";

mongoose
.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(()=>console.log("Connected to database!"));

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})
const app = express();
//translates to JsON every request

app.use(cors());
//for stripe validation and security
app.use("/api/order/checkout/webhook", express.raw({type: "*/*"}));

app.use(express.json());

app.get("/health", async (req: Request, res: Response) =>{
    res.send({message:"health OK!"});
});


app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute)
app.use("/api/order", orderRoute);
//port
app.listen(7000, ()=> {
    console.log("server started on localhost:7000");
})