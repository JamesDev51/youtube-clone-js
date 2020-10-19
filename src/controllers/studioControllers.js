import routes from "../routes"

export const studio = (req,res)=>{
    res.send("studio")
}

export const sdChannel = (req,res)=>{
    res.send("sd_channel")
}

export const sdUpload = (req,res)=>{
    res.send("sd_upload")
}

export const sdMyvideos = (req,res)=>{
    res.send("sd_myvideos")
}
export const sdEditVideo = (req,res)=>{
    res.send("sd_Edit_Video")
}
export const sdDeleteVideo = (req,res)=>{
    res.send("sd_Delete_Video")
}
export const sdComments = (req,res)=>{
    res.send("sd_Comments")
}
export const sdCnEdit = (req,res)=>{
    res.send("sd_Channel_Edit")
}