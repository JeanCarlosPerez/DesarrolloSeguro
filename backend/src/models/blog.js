import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title : String,
    content: String,
    },
    {versionKey : false})

export const Blog = mongoose.model('blog', blogSchema)