import express from "express";
import {ReviewModel} from "../../database/allModels"

const Router = express.Router();

/* 
Route     /new
descrip   add new review 
params    _id
access    public
method    get
*/

Router.get("/new/:_id", async (req, res)=>{
    try {
        const {_id} = req.body;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review : "successfully deleted review "});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});

/* 
Route     /delete
descrip   delete new review 
params    _id
access    public
method    get
*/

Router.get("/delete/:_id", async (req, res)=>{
    try {
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);
        return res.json({review : "successfully created review "});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});


export default Router;