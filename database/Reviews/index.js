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
    isRestautantReview:{
        Boolean,
    },
    isFoodReview:{
        Boolean,
    }
})

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);