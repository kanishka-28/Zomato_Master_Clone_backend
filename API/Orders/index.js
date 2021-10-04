import express from "express";
import {OrderModel} from "../../database/allModels"

const Router = express.Router();

/* 
Route     /
descrip   get all orders based on particular _id
params    _id
access    public
method    get
*/

Router.get("/:_id", async (req, res)=>{
    try {
        const {_id} = req.params;
        const orders = await OrderModel.find({user: _id});
        
        if(!orders){
            return res.json.status(404).json({error: "user not found"});
        }
        return res.json({orders});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});


/* 
Route     /new
descrip   add new order
params    _id
access    public
method    post
*/

Router.post("/new:_id", async (req, res)=>{
    try {
        const {_id} = req.params;
        const {orderDetails} = req.body;
        const newOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id
            },
            {
                $push: {orderDetails: orderDetails}
            },
            {
                new: true
            }
        );
        return res.json({order: newOrder});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

export default Router;