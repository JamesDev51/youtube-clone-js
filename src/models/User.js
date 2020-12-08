import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose"
import moment from "moment-timezone"

moment.tz.setDefault("Asia/Seoul");
const date = moment().format('YYYY-MM-DD')

const UserSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        default:"이메일을 입력해주세요"
    },
    channel:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    },
    createdAt:{
        type:String,
        default:date
    },
    userColor:Number,
    avatarUrl:String,
    googleId:Number,
    kakaoId:Number,
    naverId:Number,
    instagramId:Number
});

UserSchema.plugin(passportLocalMongoose,{usernameField:"email"})

const model=mongoose.model("User",UserSchema)

export default model