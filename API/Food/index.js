import express from "express";
import {FoodModel} from "../../database/allModels"

const Router = express.Router();

/* 
Route     /
descrip   get all the food based on particular restaurant
params    _id
access    public
method    get
*/

Router.get("/:_id", async (req, res)=>{
    try {
        const {_id} = req.params;
        const foods = await FoodModel.find({restaurant : _id});
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});


/* 
Route     /r
descrip   get all the food based on particular category
params    cat
access    public
method    get
*/

Router.get("/r/:cat", async (req, res)=>{
    try {
        const {cat} = req.params;
        const foods = await FoodModel.find({
            category : {$regex: cat, $options: "i"}
        });
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});


/* 
Route     /r
descrip   get all the food based on name
params    cat
access    public
method    get
*/

Router.get("/n/:name", async (req, res)=>{
    try {
        const {name} = req.params;
        const foods = await FoodModel.find({
            name : {$regex: name, $options: "i"}
        });
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

export default Router;