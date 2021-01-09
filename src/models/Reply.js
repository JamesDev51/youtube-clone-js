import mongoose from "mongoose";

const moment = require('moment-timezone')

const currentDateKorea = moment().tz(`Asia/Seoul`).format("YYYY-MM-DD HH:mm")

const ReplySchema = new mongoose.Schema({
    mother:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    },
    writerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    channelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    },
    writer:String,
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
    }
})

const model = mongoose.model("Reply",ReplySchema);
export default model