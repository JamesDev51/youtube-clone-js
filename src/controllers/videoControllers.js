import routes from "../routes"
import {channels,videos} from "../db"



export const search = (req,res) => {
    res.render("search")
}

export const home = (req,res) => {
    res.render("home",{channels, videos})
}
export const videoDetail = (req,res) => {
    res.render("videoDetail",{channels,videos})
}

export const myVideos = (req,res) => {
    res.render("feed/fdMyvideos",{channels, videos})
}

export const trending = (req,res) => {
    res.render("feed/fdTrending",{channels, videos})
}

export const subscriptions = (req,res) => {
    res.render("feed/fdSubscriptions",{channels, videos})
}

export const library = (req,res) => {
    res.render("feed/fdLibrary",{channels, videos})
}

export const likelist = (req,res) => {
    res.render("playlist/plLikelist",{channels, videos})
}

export const watchlist = (req,res) => {
    res.render("playlist/plWatchlist",{channels, videos})
}
