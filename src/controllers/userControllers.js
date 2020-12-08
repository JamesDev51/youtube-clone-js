import passport from "passport"
import routes from "../routes"
import User from "../models/User"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"
import { NULL } from "node-sass"


export const join = (req,res)=>{
    res.render("join/join");
}

export const getNewJoin = (req,res)=> {
    res.render("join/newJoin",{pageTitle:"일반"});
}
export const postNewJoin = async(req,res,next) => {
    const {body:{name,email,password,password2}}=req;
    if(password !== password2){
        res.status(400);
        res.render("join/newJoin",{pageTitle:"일반"})
    }else{
        try{
            const userColor = Math.floor(Math.random()*10)
            const channel = await Channel.create({
                name,avatarUrl
            })
            const user = await User({
                name,email,channelName:name,userColor,channel:channel._id
            })
            
            await User.register(user,password);
            next();
        }catch(error){
            console.log(error)
            res.redirect(routes.home);
        }
    }
}


export const getLogin = async(req,res) => {
    const channels = await Channel.find({})
    try{
        res.render("login", {channels})
        
    }catch(error){
        console.log(error)
        res.render("login", {channels})
    }
}

export const postLogin = passport.authenticate('local',{
    successRedirect:routes.home,
    failureRedirect:routes.login
})

export const googleLogin = passport.authenticate("google",{scope:['profile','email']});

export const googleLoginCallback = async(accessToken, refreshToken, profile, cb) => {
    const {_json:{sub:googleId,name,picture:avatarUrl,email}}=profile;

    try{
        const emailError = new Error
        if(!email){
            alert('이메일이 존재하지 않아 소셜 회원가입이 불가합니다')
            throw(emailError);
        }

            const user = await User.findOne({email});
            if(user){
                if(user.googleId==null){
                    user.googleId=googleId;
                }
                if(user.avatarUrl==null){
                    user.avatarUrl=avatarUrl
                }
                user.save();
                return cb(null,user);
            }
            const userColor = Math.floor(Math.random()*10)
            const channel = await Channel.create({
                name,avatarUrl
            })
            const newUser = await User.create({
                email,
                name,
                channel,
                userColor,
                googleId,
                avatarUrl
            })
            return cb(null,newUser)
    }catch(error){
        return cb(error)
    }
}
export const postGoogleLogin =  (req,res)=>{
   res.redirect(routes.home)
}

export const kakaoLogin = passport.authenticate('kakao',{scope:['profile','account_email']});

export const kakaoLoginCallback = async(accessToken, refreshToken, profile, cb)=>{
    
    const {_json:{id:kakaoId,properties:{nickname:name,profile_image:avatarUrl},kakao_account:{email}}}=profile
    try{
        const emailError = new Error
        if(!email){
            alert('이메일이 존재하지 않아 소셜 회원가입이 불가합니다')
            throw(emailError);
        }
        const user = await User.findOne({email});
        if(user){
            if(user.kakaoId==null){
                user.kakaoId=kakaoId
            }
            if(user.avatarUrl==null){
                user.avatarUrl=avatarUrl
            }
            user.save();
            return cb(null,user)
        }
        const userColor = Math.floor(Math.random()*10)
        const channel = await Channel.create({
            name,avatarUrl
        })
        const newUser = await User.create({
            name,
            email,
            channel,
            userColor,
            kakaoId,
            avatarUrl
        })
        return cb(null, newUser)
    }catch(error){
        console.log(error)
        return cb(error)
    }
}  

export const postKakaoLogin = (req,res)=>{
   res.redirect(routes.home)
}
export const naverLogin = passport.authenticate('naver',{scope:['profile']});

export const naverLoginCallback = async(accessToken, refreshToken, profile, cb)=>{
    const {displayName:name,_json:{
        email,profile_image:avatarUrl,id:naverId
    }}=profile
    try{
        const emailError = new Error
        if(!email){
            alert('이메일이 존재하지 않아 소셜 회원가입이 불가합니다')
            throw(emailError);
        }
        const user = await User.findOne({email});
        if(user){
            if(user.naverId==null){
                user.naverId=naverId
            }
            if(user.avatarUrl==null){
                user.avatarUrl=avatarUrl
            }
            user.save();
            return cb(null,user)
        }
        const userColor = Math.floor(Math.random()*10)
        const channel = await Channel.create({
            name,avatarUrl
        })
        const newUser = await User.create({
            name,
            email,
            userColor,
            channel,
            naverId,
            avatarUrl
        })
        return cb(null, newUser)
    }catch(error){
        return cb(error)
    }
}  

export const postNaverLogin = (req,res)=>{
    res.redirect(routes.home)
}
export const githubLogin = passport.authenticate('github',{scope:['profile']});

export const githubLoginCallback = async(accessToken, refreshToken, profile, cb)=>{
    const {_json:{id:githubId,avatar_url:avatarUrl,name,email}}=profile;
    try{
        const emailError = new Error
        if(!email){
            alert('이메일이 존재하지 않아 소셜 회원가입이 불가합니다')
            throw(emailError);
        }
        const user = await User.findOne({email});
        if(user){
            if(user.githubId==null){
                user.githubId=githubId
            }
            if(user.avatarUrl==null){
                user.avatarUrl=avatarUrl
            }
            user.save();
            return cb(null,user)
        }
        const userColor = Math.floor(Math.random()*10)
        const channel = await Channel.create({
            name,avatarUrl
        })
        const newUser = await User.create({
            name,
            email,
            userColor,
            channel,
            githubId,
            avatarUrl
        })
        return cb(null, newUser)
    }catch(error){
        return cb(error)
    }
}  

export const postGithubLogin = (req,res)=>{
    res.redirect(routes.home)
}

export const logout = (req,res)=> {
    req.logout();
    res.redirect(routes.home);
}


export const myPage = async(req,res)=>{
    const channels = await Channel.find({})
    try{
        res.render("myPage", {channels})
    }
    catch(error){

        console.log(error)
        res.render("myPage", {channels})
    }
}

export const editProfile = async(req,res) => { 
    const channels = await Channel.find({})
    try{
        res.render("editProfile", {channels})
        
    }catch(error){
        console.log(error)
        res.render("editProfile", {channels})
    }
}

export const changePassword = async(req,res)=> {
    const channels = await Channel.find({})
    try{
        res.render("changePassword", {channels})
        
    }catch(error){
        console.log(error)
        res.render("changePassword", {channels})
    }
}
