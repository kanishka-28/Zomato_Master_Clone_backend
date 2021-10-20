import express from "express";
import {MenuModel, ImageModel} from "../../database/allModels"
import { ValidateRestaurantId } from "../../validation/restaurant";

const Router = express.Router();

/* 
Route     /list
descrip   get all menu based on particular restaurant
params    _id
access    public
method    get
*/

Router.get("/list/:_id", async (req, res)=>{
    try {
        await ValidateRestaurantId(req.params)
        const {_id} = req.params;
        const menus = await MenuModel.find({_id});
        return res.json({menus});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});


/* 
Route     /img
descrip   get menu images based on menu
params    _id
access    public
method    get
*/

Router.get("/img/:_id", async (req, res)=>{
    try {
        await ValidateRestaurantId(req.params)
        const {_id} = req.params;
        const images = await ImageModel.findOne(_id);
        return res.json({images});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

export default Router;