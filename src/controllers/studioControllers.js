import routes from "../routes"

export const sdDash = (req,res)=>{
    res.render("studio/sdDash")
}
export const sdMyvideos = (req,res)=>{
    res.render("studio/sdMyvideos")
}

export const sdComments = (req,res)=>{
    res.render("studio/sdComments")
}
export const sdCnEdit = (req,res)=>{
    res.render("studio/sdCnEdit")
}
export const sdUpload = (req,res)=>{
    res.render("studio/sdUpload")
}
export const sdEditVideo = (req,res)=>{
    res.render("studio/sdEditVideo")
}
export const sdDeleteVideo = (req,res)=>{
    res.render("studio/sdDeleteVideo")
}