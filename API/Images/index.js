import express from "express";
import {ImageModel} from "../../database/allModels"
import AWS from"aws-sdk";
import multer from "multer"

import s3Upload from "../../Utils/AWS_Utilities/s3"

const Router = express.Router();

//multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

//AWS s3 bucket config



/* 
Route     /
descrip   uploading given image to s3 bucket and then saving our file to mongoDb
params    _id
access    public
method    post
*/

Router.post("/",upload.single("file"), async (req, res)=>{
    try {
        const file = req.file;
        
        const bucketOptions={
            Bucket: "shapeai-intern",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        }

        const uploadImage = await s3Upload(bucketOptions);
        return res.json({uploadImage});

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
});

export default Router;