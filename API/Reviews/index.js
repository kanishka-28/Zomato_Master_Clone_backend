import express from "express";
import {ReviewModel} from "../../database/allModels"
import {ValidateReview, ValidateId} from "../../Validation/review"

const Router = express.Router();


/* 
Route     /new
descrip   add new review 
params    _id
access    public
method    get
*/

Router.post("/new/", async (req, res)=>{
    try {
        const {reviewData} = req.body;
        await ValidateReview(reviewData)
        await ReviewModel.create(reviewData);
        return res.json({review : "successfully created review "});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});

    
/* 
Route     /delete
descrip   delete a review 
params    _id
access    public
method    get
*/

Router.delete("/delete/:_id", async (req, res)=>{
    try {
        const {_id} = req.params;
        await ValidateId(req.params);
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review : "successfully deleted review "});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});


export default Router;