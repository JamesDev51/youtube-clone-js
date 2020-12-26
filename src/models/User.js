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
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }],
    replies:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Reply"
        }],
    userColor:String,
    avatarUrl:String,
    googleId:Number,
    kakaoId:Number,
    naverId:Number,
    githubId:Number,
    passwordToken:{
        type:Boolean,
        default:false},
    videos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }],
    subscribeChannels:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Channel"
    }],
    library:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }],
    likelist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }],
    dislikelist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }],
    watchlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }]
});

UserSchema.plugin(passportLocalMongoose,{usernameField:"email"})

const model=mongoose.model("User",UserSchema)

export default model