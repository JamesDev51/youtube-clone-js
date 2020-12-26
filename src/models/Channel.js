import mongoose from "mongoose";

const ChannelSchema = new mongoose.Schema({
    name:String,
    avatarUrl:String,
    coverUrl:String,
    watermarkUrl:String,
    subscribers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    videos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }],
    userColor:String,
    description:{
        type:String,
        default:"안녕하세요 반갑습니다."
    }
})

const model = mongoose.model("Channel",ChannelSchema);
export default model;