import routes from "../routes"
import {channels} from "../db"

export const join = (req,res)=>{
    res.render("join",{channels});
}

export const postJoin = (req,res)=> {
    res.send("join");
}
export const getNewJoin = (req,res)=> {
    res.render("newJoin",{channels});
}
export const postNewJoin = (req,res)=> {
    res.send("newJoin");
}
export const getSocialJoin = (req,res)=> {
    res.render("socialJoin",{channels});
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
