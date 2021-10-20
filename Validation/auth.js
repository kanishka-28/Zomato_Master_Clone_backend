//authentication ke liye validation 
import joi from "joi"
import { UserModel } from "../database/allModels"

export const ValidationSignup = (userData)=>{
    const Schema = joi.object({
        fullname: joi.string().required().min(4),
        email: joi.string().email(),
        password: joi.string().min(5),
        address: joi.array().items(joi.object({detail: joi.string(), for:joi.string()})),
        phoneNumber: joi.number().min(10).max(12),
    });

    return Schema.validateAsync(userData);
};

export const ValidationSignin = (userData)=>{
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(5).required(),
    });

    return Schema.validateAsync(userData);
};