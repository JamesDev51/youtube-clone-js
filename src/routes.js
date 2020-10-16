//GLOBAL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

//RESULT - SEARCH
const RESULT = "/result"
const SEARCH = "/SEARCH";

//VIDEO
const VIDEO = "/video";
const VIDEO_DETAIL = "/:id"

//STUDIO
const STUDIO = "/studio"
const STUDIO_CN ="/channel"
const SD_UPLOAD ="/:id/upload"
const SD_MYVIDEOS = "/:id/my_videos"
const SD_EDIT_VIDEO ="/:id/edit_video"
const SD_DELETE_VIDEO = "/:id/delete"
const SD_COMMENTS = "/:id/comments"
const SD_CN_EDIT = "/:id/cn_edit"

//PLAYLIST
const PLAYLIST = "/playlist"
const LIKELIST = "/LL"
const WATCHLIST = "/WL"

//FEED
const FEED = "/feed";
const MYVIDEOS = "/my_videos"
const TRENDING = "/trending";
const SUBSCRIPTIONS= "/subscriptions";
const LIBRARY = "/library";

//USERS
const USERS = "/users";
const EDIT_PROFILE = "/profile";
const CHANGE_PASSWORD = "/change-password"

//CHANNEL
const CHANNEL = "/channel"
const CN_DETAIL = "/:id";
const CN_FEATURE = "/:id/feature";
const CN_VIDEOS = "/:id/videos";
const CN_COMMUNITY = "/:id/community"
const CN_ABOUT = ":/id/about"




const routes = {
    home:HOME,
    join:JOIN,
    login:LOGIN,
    logout:LOGOUT,
    result:RESULT,
    search:SEARCH,
    studio:STUDIO,
    studioCN:STUDIO_CN,
    sdUpload:SD_UPLOAD,
    sdMyVideos:SD_MYVIDEOS,
    sdEditVideo :SD_EDIT_VIDEO,
    sdDeleteVideo : SD_DELETE_VIDEO,
    sdComments : SD_COMMENTS,
    sdCnEdit : SD_CN_EDIT,
    playlist : PLAYLIST,
    likelist : LIKELIST,
    watchlist : WATCHLIST,
    feed : FEED,
    myvideos :MYVIDEOS,
    trending : TRENDING,
    subscriptions : SUBSCRIPTIONS,
    library : LIBRARY,
    users : USERS,
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    channel : CHANNEL,
    cnDetail : CN_DETAIL,
    cnFeature : CN_FEATURE,
    cnVideos : CN_VIDEOS,
    cnCommunity : CN_COMMUNITY,
    cnAbout : CN_ABOUT,
    video : VIDEO,
    videoDetail : VIDEO_DETAIL
    

}

export default routes;