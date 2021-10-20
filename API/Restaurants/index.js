import { RestaurantModel } from "../../database/allModels";
import express from "express";

const Router = express.Router();


/* 
Route     /
descrip   get all restaurant details
params    none
access    public
method    get
*/

Router.get("/", async(req, res)=>{
    try {
        const {city} = req.query;
        const restaurants = RestaurantModel.find({city});
        return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

export default Router;