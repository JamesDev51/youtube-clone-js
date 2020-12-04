import mongoose from "mongoose";

const moment = require('moment-timezone')

const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY.MM.DD.")

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
    views:{
        type:Number,
        default:0
    },
    createdAt:{
        type:String,
        default:currentDateKorea
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    }
})

const model = mongoose.model("Video",VideoSchema);
export default model;