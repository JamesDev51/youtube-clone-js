import mongoose from "mongoose";

const moment = require('moment-timezone')

const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const VideoSchema = new mongoose.Schema({
    videoFile:{
        type:String,
        required:'File URL is required'
    },
    title:{
        type:String,
        required:'Title is required'
    },
    description:String,
    newDescription:String,
    views:{
        type:Number,
        default:0
    },
    createdAt:{
        type:String,
        default:currentDateKorea
    },
    likelist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    dislikelist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],    
    replies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reply"
    }],
    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    },
})

const model = mongoose.model("Video",VideoSchema);
export default model;