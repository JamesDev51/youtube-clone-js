import { videoDetail } from "./controllers/videoControllers";

//GLOBAL 
const REMAIN=""
const HOME = "/";
const LOGIN = "/login";
const LOGOUT = "/logout";

// JOIN
const JOIN = "/join";
const NEWJOIN = "/newjoin"
const SOCIALJOIN= "/socialjoin"

//RESULT - SEARCH  
const RESULT = "/result"
const SEARCH = "/SEARCH";

//VIDEO  
const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id"

//STUDIO   
const STUDIO = "/studio"
const SD_CHANNEL ="/channel"
const SD_DASH = "/:id"
const SD_MYVIDEOS = "/:id/my_videos"
const SD_COMMENTS = "/:id/comments"
const SD_CN_EDIT = "/:id/cn_edit"
const SD_UPLOAD ="/:id/upload"
const SD_EDIT_VIDEO ="/:id/edit_video/:id"
const SD_DELETE_VIDEO = "/:id/edit_video/:id/delete"

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
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password"

//CHANNEL 
const CHANNEL = "/channel"
const CN_DETAIL = "/:id";
const CN_FEATURE = "/:id/feature";
const CN_VIDEOS = "/:id/videos";
const CN_COMMUNITY = "/:id/community"
const CN_ABOUT = "/:id/about"


const routes = {
    remain:REMAIN,
    home:HOME,
    login:LOGIN,
    logout:LOGOUT,
    join:JOIN,
    newJoin:NEWJOIN,
    socialJoin:SOCIALJOIN,
    result:RESULT,
    search:SEARCH,
    studio:STUDIO,
    sdChannel:SD_CHANNEL,
    sdDash:(id)=> {
        if(id){
            return `studio/channel/${id}`;
        }else{
            return SD_DASH
        }}
    ,
    sdMyVideos:(id)=> {
        if(id){
            return `studio/channel/${id}/my_videos`;
        }else{
            return SD_MYVIDEOS
        }}
    ,
    sdComments : (id)=> {
        if(id){
            return `studio/channel/${id}/comments`;
        }else{
            return SD_COMMENTS
        }},
    sdCnEdit :(id)=> {
        if(id){
            return `studio/channel/${id}/cn_edit`;
        }else{
            return SD_CN_EDIT
        }}
    ,
    sdUpload: (id)=> {
        if(id){
            return `studio/channel/${id}/upload`;
        }else{
            return SD_UPLOAD
        }}
    ,
    sdEditVideo : (id1,id2)=> {
        if(id1,id2){
            return `studio/channel/${id1}/edit_video/${id2}`;
        }else{
            return SD_EDIT_VIDEO
        }}
    ,
    sdDeleteVideo : (id1,id2)=> {
        if(id1,id2){
            return `studio/channel/${id1}/edit_video/${id2}/delete`;
        }else{
            return SD_DELETE_VIDEO
        }} 
    ,
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
    cnDetail : (id)=> {
        if(id){
            return `/channel/${id}`;
        }else{
            return CN_DETAIL
        }},
    cnFeature :(id)=> {
        if(id){
            return `/channel/${id}/feature`;
        }else{
            return CN_FEATURE
        }}, 
    cnVideos : (id)=> {
        if(id){
            return `/channel/${id}/videos`;
        }else{
            return  CN_VIDEOS
        }},
    cnCommunity : (id)=> {
        if(id){
            return `/channel/${id}/community`;
        }else{
            return  CN_COMMUNITY
        }}
    ,
    cnAbout : (id)=> {
        if(id){
            return `/channel/${id}/about`;
        }else{
            return  CN_ABOUT
        }}
    ,
    videos : VIDEOS,
    videoDetail : (id)=> {
        if(id){
            return `/videos/${id}`;
        }else{
            return VIDEO_DETAIL;
        }
    }
}

export default routes;