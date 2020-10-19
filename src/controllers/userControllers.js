import routes from "../routes"

export const getJoin = (req,res)=>{
    res.send("join");
}

export const postJoin = (req,res)=> {
    res.send("join");
}

export const getLogin = (req,res) => {
    res.send("login")
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
