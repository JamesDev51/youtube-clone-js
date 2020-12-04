import passport from "passport"
import routes from "../routes"
import User from "../models/User"
import Video from "../models/Video"
import Channel from "../models/Channel"
import Comment from "../models/Comment"
import Trending from "../models/Trending"


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
            const user = await User({
                name,email
            })
            await User.register(user,password);
            next();
        }catch(error){
            console.log(error)
            res.redirect(routes.home);
        }
     

    }
}
export const getSocialJoin = (req,res)=> {
    res.render("join/socialJoin",{pageTitle:"소셜"});
}
export const postSocialJoin = (req,res)=> {
    res.send("socialJoin");
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

export const logout = (req,res)=> {
    res.send("logout")
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
