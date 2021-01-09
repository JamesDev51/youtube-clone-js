import mongoose from "mongoose";

const moment = require('moment-timezone')

const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const CommentSchema = new mongoose.Schema({
    writer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    text:{
        type:String,
        required:"Text is required"
    },
    createdAt:{
        type:String,
        default:currentDateKorea
    },
    video:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    },
    replies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reply"
        }],
    likelist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    dislikelist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
})

const model = mongoose.model("Comment",CommentSchema);
export default model