import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    description: String,
    postDate: String
})

export const postModel = mongoose.model('POSTS', postSchema)