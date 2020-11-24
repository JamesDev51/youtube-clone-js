import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
    name:String,
    coverUrl:String,
    avatarUrl:String,
    subscribers:Number,
    videos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]
})

const model = mongoose.model("Channel",ChannelSchema);
export default model;