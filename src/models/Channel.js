import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
    name:String,
    coverUrl:String,
    avatarUrl:String,
    subscribers:{
        type:Number,
        default:0
    },
    videos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]
})

const model = mongoose.model("Channel",ChannelSchema);
export default model;