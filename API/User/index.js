import express from "express";
import {UserModel} from "../../database/allModels"
import { ValidateUser, ValidateUserId  } from "../../Validation/user";
const Router = express.Router();

/* 
Route     /user
descrip   get the data of a user
params    _id
access    public
method    get
*/

Router.get("/user/:_id", async (req, res)=>{
    try {
        const userId = req.params;
        await ValidateUser(userId);
        const {_id} = req.params;
        const user = await UserModel.findById({_id});
        return res.json({user});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
});


/* 
Route     /update
descrip   update an userdata
params    _id
access    public
method    put
*/

Router.get("/update/:_id", async (req, res)=>{
    try {
        const {_id} = req.params;
        const {userData} = req.body;
        const userId = req.params;
        await ValidateUser(userId);
        await ValidateUser(userData);
        const updateUser = await UserModel.findByIdAndUpdate(
            _id,
            {
                $set: userData,
            },
            {
                new: true,
            }
        );
        return res.json({updateUser});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

export default Router;