import mongoose from "mongoose";

const ReviewSchema = mongoose.Schema({
    food:
    {
        type: mongoose.Types.ObjectId,
        ref: "Foods",
    },
    restaurant:
    {
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
    },
    User:
    {
        type: mongoose.Types.ObjectId,
        ref: "Users",
    },
    photos:
    {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    isRestautantReview:{
        Boolean,
    },
    isFoodReview:{
        Boolean,
    },
    rating:
    {
        type: Number,
        required: true,
    },
    reviewText:
    {
        type: String,
        required: false,
    },
})

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);