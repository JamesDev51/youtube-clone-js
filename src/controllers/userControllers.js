import routes from "../routes"
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
export const postNewJoin = (req,res)=> {
    const {body:{name,email,password,password2}}=req;
    if(password !== password2){
        res.status(400);
        res.render("join/newJoin",{pageTitle:"일반"})
    }else{
        //To do : register User
        //To do : Log user in
        res.redirect(routes.home)
    }
}
export const getSocialJoin = (req,res)=> {
    res.render("join/socialJoin",{pageTitle:"소셜"});
}
export const postSocialJoin = (req,res)=> {
    res.send("socialJoin");
}




export const getLogin = (req,res) => {
    res.render("login", {channels})
}

export const postLogin = (req,res) => {
    res.send("login")
}

export const logout = (req,res)=> {
    res.send("logout")
}

export const editProfile = (req,res) => { 
    res.send("edit Profile")
}

export const changePassword = (req,res)=> {
    res.send("change Password")
}
