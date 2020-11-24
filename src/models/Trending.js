import mongoose from "mongoose";

const TrendingSchema = new mongoose.Schema({
    trending:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"    
    }],
})

const model = mongoose.model("Trending",TrendingSchema);
export default model;