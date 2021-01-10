import passport from "passport"
import routes from "../routes"
import User from "../models/User"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"
import { TRUE } from "node-sass"

//global function or variable
const domain = "https://evening-journey-26910.herokuapp.com"

function colorSelector(userColor) {
if(userColor==0){
        const selectedColor = "#ff99cc"
        return selectedColor
}
if(userColor==1){
    const selectedColor = "#cccc00"
    return selectedColor
}
if(userColor==2){    
    const selectedColor = "#0066cc"
return selectedColor}
if(userColor==3){    
    const selectedColor = "#009933"
return selectedColor}
if(userColor==4){    
    const selectedColor = "#6600cc"
    return selectedColor}
if(userColor==5){    
    const selectedColor = "#660033"
    return selectedColor}
if(userColor==6){    
    const selectedColor = "#66ff99"
    return selectedColor}
if(userColor==7){    
    const selectedColor = "#ff99cc"
    return selectedColor}
if(userColor==8){    
    const selectedColor = "#009999"
    return selectedColor}
if(userColor==9){    
    const selectedColor = "#cc3300"
    return selectedColor}
}


//join
export const join = (req,res)=>{
    res.render("join/join");
}

export const getNewJoin = (req,res)=> {
    res.render("join/newJoin",{pageTitle:"일반"});
}
export const postNewJoin = async(req,res,next) => {
    const {body:{name,email,password,password2}}=req;
    if(password !== password2){
        req.flash('error',"비밀번호가 일치하지 않습니다.")
        res.status(400);
        res.render("join/newJoin",{pageTitle:"일반"})
    }else{
        try{
            const userColor = Math.floor(Math.random()*10)
            const selectedColor = colorSelector(userColor)
            const channel = await Channel.create({
                name,userColor:selectedColor
            })
            const user = await User({
                name,
                email,
                userColor:selectedColor,
                channel:channel._id,
                passwordToken:true
            })
            await User.register(user,password);
            next();
        }catch(error){
            console.log(error)
            res.redirect(routes.home);
        }
    }
}


//login
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
    failureRedirect:routes.login,
    successFlash:"반갑습니다!",
    failureFlash:"로그인이 불가능합니다. 이메일이나 비밀번호를 확인해주세요."
})

//social login & join
export const googleLogin = passport.authenticate("google",{
    scope:['profile','email'],    
    successFlash:"반갑습니다!",
    failureFlashL:"로그인이 불가능합니다. 이메일이나 비밀번호를 확인해주세요."
});

export const googleLoginCallback = async(accessToken, refreshToken, profile, cb) => {
    const {_json:{sub:googleId,name:displayName,picture:avatarUrl,email}}=profile;

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
            let name
            if(!displayName){
                name=googleId
            }else{
                name=displayName
            }
            const userColor = Math.floor(Math.random()*10)
            const selectedColor = colorSelector(userColor)
            const channel = await Channel.create({
                name,userColor:selectedColor,avatarUrl
            })
            const newUser = await User.create({
                email,
                name,
                channel:channel._id,
                userColor:selectedColor,
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

export const kakaoLogin = passport.authenticate('kakao',{
    scope:['profile','account_email'],
    successFlash:"반갑습니다!",
    failureFlashL:"로그인이 불가능합니다. 이메일이나 비밀번호를 확인해주세요."
});

export const kakaoLoginCallback = async(accessToken, refreshToken, profile, cb)=>{
    
    const {_json:{id:kakaoId,properties:{nickname:displayName,profile_image:avatarUrl},kakao_account:{email}}}=profile
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
        let name
        if(!displayName){
            name=kakaoId
        }else{
            name=displayName
        }
        const userColor = Math.floor(Math.random()*10)
        const selectedColor = colorSelector(userColor)
        const channel = await Channel.create({
            name,userColor:selectedColor,avatarUrl
        })
        const newUser = await User.create({
            name,
            email,
            channel:channel._id,
            userColor:selectedColor,
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
export const naverLogin = passport.authenticate('naver',{
    scope:['profile'],
    successFlash:"반갑습니다!",
    failureFlashL:"로그인이 불가능합니다. 이메일이나 비밀번호를 확인해주세요."
});

export const naverLoginCallback = async(accessToken, refreshToken, profile, cb)=>{
    const {displayName,_json:{
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
        let name
        if(!displayName){
            name=naverId
        }else{
            name=displayName
        }
        const userColor = Math.floor(Math.random()*10)
        const selectedColor = colorSelector(userColor)
        const channel = await Channel.create({
            name,userColor:selectedColor,avatarUrl
        })
        const newUser = await User.create({
            name,
            email,
            userColor:selectedColor,
            channel:channel._id,
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
export const githubLogin = passport.authenticate('github',{
    scope:['profile'],
    successFlash:"반갑습니다!",
    failureFlashL:"로그인이 불가능합니다. 이메일이나 비밀번호를 확인해주세요."});

export const githubLoginCallback = async(accessToken, refreshToken, profile, cb)=>{
    const {_json:{id:githubId,avatar_url:avatarUrl,name:displayName,email}}=profile;
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
        let name
        if(!displayName){
            name=naverId
        }else{
            name=displayName
        }
        const userColor = Math.floor(Math.random()*10)
        const selectedColor = colorSelector(userColor)
        const channel = await Channel.create({
            name,userColor:selectedColor,avatarUrl
        })
        const newUser = await User.create({
            name,
            email,
            userColor:selectedColor,
            channel:channel._id,
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

//logout
export const logout = (req,res)=> {
    req.flash('info',"로그아웃 하였습니다. see ya")
    req.logout();
    res.redirect(routes.home);
}

//mypage
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

//editProfile
export const getEditProfile = async(req,res) => { 
    const channels = await Channel.find({})
    try{
        res.render("editProfile", {channels})
        
    }catch(error){
        console.log(error)
        res.render("editProfile", {channels})
    }
}

export const postEditProfile = async(req,res)=>{
    const {body:{name,email},file}=req;
    try{

        const avatarUrl = `${domain}/${file.path}`
        await User.findByIdAndUpdate(req.user._id,{
            name
            ,email
            ,avatarUrl: file ? avatarUrl : req.user.avatarUrl
        })
        await Channel.findByIdAndUpdate(req.user.channel,{
            name:channelName,
            avatarUrl: file ? avatarUrl : req.user.avatarUrl
        })
        req.flash('success','회원정보가 변경되었습니다.')
        res.redirect(`/users${routes.myPage}`)
    }
    catch(error){
        console.log(error)
        req.flash('error','회원정보 변경에 실패했습니다.')
        res.redirect(`/users${routes.myPage}`)
    }
}

export const getSetPassword = async(req,res)=>{
    const channels = await Channel.find({})
    try{
        res.render("setPassword", {channels})
        
    }catch(error){
        console.log(error)
        res.render("setPassword", {channels})
    }
}

export const postSetPassword = async(req,res)=>{
    const {body:{newPassword,newPassword1}}=req;
    
    try{
        if(newPassword !== newPassword1){
            res.status(400)
            res.redirect(`/users${routes.setPassword}`)
            return;
        }
        await req.user.setPassword(newPassword);
        req.user.passwordToken = true;
        req.user.save();
        req.flash('success','신규 비밀번호가 설정되었습니다.')
        res.redirect(`/users${routes.myPage}`)
    }
    catch(error){
        res.status(400)
        req.flash('error','신규 비밀번호 설정에 실패했습니다.')
        res.redirect(`/users${routes.setPassword}`)
    }
}



//changePassword
export const getChangePassword = async(req,res)=> {
    const channels = await Channel.find({})
    const {user}=req
    try{
        if(user.passwordToken==false){
            res.redirect(`/users${routes.setPassword}`)
            return;
        }
        res.render("changePassword", {channels})
        
    }catch(error){
        console.log(error)
        if(user.googleId ||user.kakaoId ||user.naverId ||user.githubId){
            res.redirect(`/users${routes.setPassword}`)
            return;
        }
        res.render("changePassword", {channels})
    }
}

export const postChangePassword = async(req,res)=>{
    const {body:{oldPassword,newPassword,newPassword1}}=req;
    
    try{
        if(newPassword !== newPassword1){
            req.flash('error','비밀번호가 일치하지 않습니다.')
            res.status(400)
            res.redirect(`/users${routes.changePassword}`)
            return;
        }
        await req.user.changePassword(oldPassword,newPassword)
        req.user.save();
        req.flash('success','비밀번호가 변경되었습니다.')
        res.redirect(`/users${routes.myPage}`)
    }
    catch(error){
        res.status(400)
        req.flash('error','비밀번호가 변경되지 않았습니다.')
        res.redirect(`/users${routes.changePassword}`)
    }
}