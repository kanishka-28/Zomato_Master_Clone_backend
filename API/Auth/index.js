//505 --> internal server error 

import express from 'express';
import passport from 'passport';
import { RestaurantModel } from '../../database/Restaurant';

const Router=express.Router();

//models
import {UserModel} from "../../database/allModels";

/* 
Route     /signup
descrip   signup with email and password
params    none
access    public
method    post

*/

Router.post("/signup",async(req,res)=>{
    try{
        
        //check whether email or phone already exists
        
        await UserModel.findEmailAndPhone(req.body.credentials);

        //DB

        const newUser=await UserModel.create(req.body.credentials
        )

        //JWT AUth Token
        const token = newUser.generateJwtToken();

        return res.status(200).json({token});


    } catch(error){
        return res.status(500).json({error: error.message});
    }
})

/* 
Route     /signin
descrip   signin with email and password
params    none
access    public
method    post

*/

Router.post("/signin",async(req,res)=>{
  try{
    
    const user = await UserModel.findByEmailAndPassword(req.body.credentials);
    
    //JWT AUth Token
    const token = user.generateJwtToken();
    
    return res.status(200).json({token, status:"Success"});
    
    
  } catch(error){
    return res.status(500).json({error: error.message + " signin"});
  }
})
// /* 
// Route     /google
// descrip   Google signin 
// params    none
// access    public
// method    GET

// */

// Router.get("/google",passport.authenticate("google",{
//   scope:[
//     "https://www.googleapis.com/auth/userinfo.profile",
//     "https://www.googleapis.com/auth/userinfo.email"
    
//   ],
// }));

// /* 
// Route     /google/callback
// descrip   Google signin callback
// params    none
// access    public
// method    GET

// */

// Router.get("/google/callback",passport.authenticate("google",{
//   failureRedirect:"/"
// } ),(req,res)=>{
//   return res.json({token: req.session.passport.user.token});
// });

// /* 
// Route     /search
// descrip   get restaurant details based on search
// params    none
// body      searchString
// access    public
// method    get

// */

// Router.get("/search", async (req, res)=>{
//   try {
//     const {searchString} = req.body;
//     const restaurants = await RestaurantModel.find(
//       {
//         name: {$regex: searchString, $options: "i"},        //regex --> find the substring , options: "i" --> case insensitive 
//       }
//     )
//   } catch (error) {
//     res.status(500).json({error: error.message});
//   }
// });

export default Router;