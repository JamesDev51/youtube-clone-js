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
const SEARCH = "/search";

//VIDEO  
const VIDEOS = "/videos";
const VIDEO_DETAIL = "/:id"

//STUDIO   
const STUDIO = "/studio"
const SD_CHANNEL ="/channel"
const SD_DASH = "/:id"
const SD_MYVIDEOS = "/:id/my_videos"
const SD_COMMENTS = "/:id/comments"
const SD_EDIT_IMAGES = "/:id/cn_edit/images"
const SD_EDIT_DETAILS = "/:id/cn_edit/details"
const SD_UPLOAD ="/:id/upload"
const SD_RECORD ="/:id/record"
const SD_STREAMING ="/:id/streaming"
const SD_EDIT_VIDEO ="/:id/edit_video/:id"

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
const MY_PAGE = "/myPage"
const EDIT_PROFILE = "/edit-profile";
const SET_PASSWORD = "/set-password"
const CHANGE_PASSWORD = "/change-password"

//CHANNEL 
const CHANNEL = "/channel"
const CN_DETAIL = "/:id";
const CN_FEATURE = "/:id/feature";
const CN_VIDEOS = "/:id/videos";
const CN_COMMUNITY = "/:id/community"
const CN_ABOUT = "/:id/about"

//Google
const GOOGLE = "/auth/google";
const GOOGLE_CALLBACK="/auth/google/callback"

//Kakao
const KAKAO = "/auth/kakao";
const KAKAO_CALLBACK="/auth/kakao/callback"

//Naver
const NAVER = "/auth/naver";
const NAVER_CALLBACK="/auth/naver/callback"

//Github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK="/auth/github/callback"

//api
const API="/api";
const DELETE_VIDEO = "/:id/video/delete"
const REGISTER_VIEW="/:id/view"
const ADD_COMMENT="/:id/comment"
const ADD_REPLY="/:id/reply"
const SUBSCRIBE="/:id/subscribe"
const SUBSCRIBE_CANCEL="/:id/subscribe/cancel"
const WATCH_LIST="/:id/watchlist"
const WATCH_LIST_CANCEL="/:id/watchlist/cancel"
const VIDEO_LIKE="/:id/video_like"
const VIDEO_DISLIKE="/:id/video_dislike"
const VIDEO_LIKE_CANCLE="/:id/video_like/cancle"
const VIDEO_DISLIKE_CANCLE="/:id/video_dislike/cancle"
const COMMENT_LIKE="/:id/comment_like"
const COMMENT_DISLIKE="/:id/comment_dislike"
const COMMENT_LIKE_CANCLE="/:id/comment_like_cancle"
const COMMENT_DISLIKE_CANCLE="/:id/comment_dislike_cancle"
const COMMENT_DELETE="/:id/comment/delete"


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
            return `/studio/channel/${id}`;
        }else{
            return SD_DASH
        }}
    ,
    sdMyVideos:(id)=> {
        if(id){
            return `/studio/channel/${id}/my_videos`;
        }else{
            return SD_MYVIDEOS
        }}
    ,
    sdComments : (id)=> {
        if(id){
            return `/studio/channel/${id}/comments`;
        }else{
            return SD_COMMENTS
        }},
    sdEditImages :(id)=> {
        if(id){
            return `/studio/channel/${id}/cn_edit/images`;
        }else{
            return SD_EDIT_IMAGES
        }},
    sdEditDetails :(id)=> {
        if(id){
            return `/studio/channel/${id}/cn_edit/details`;
        }else{
            return SD_EDIT_DETAILS
        }},
    sdUpload: (id)=> {
        if(id){
            return `/studio/channel/${id}/upload`;
        }else{
            return SD_UPLOAD
        }}
    ,
    sdRecord: (id)=> {
        if(id){
            return `/studio/channel/${id}/record`;
        }else{
            return SD_RECORD
        }}
    ,
    sdStreaming: (id)=> {
        if(id){
            return `/studio/channel/${id}/streaming`;
        }else{
            return SD_STREAMING
        }}
    ,
    sdEditVideo : (id1,id2)=> {
        if(id1,id2){
            return `/studio/channel/${id1}/edit_video/${id2}/`;
        }else{
            return SD_EDIT_VIDEO
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
    myPage:MY_PAGE,
    editProfile : EDIT_PROFILE,
    setPassword:SET_PASSWORD,
    changePassword : CHANGE_PASSWORD,
    channel : CHANNEL,
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
    },
    google:GOOGLE,
    googleCallback:GOOGLE_CALLBACK,
    kakao:KAKAO,
    kakaoCallback:KAKAO_CALLBACK,
    naver:NAVER,
    naverCallback:NAVER_CALLBACK,
    github:GITHUB,
    githubCallback:GITHUB_CALLBACK,
    api:API,
    registerView:REGISTER_VIEW,
    addComment:ADD_COMMENT,
    addReply:ADD_REPLY,
    subscribe:SUBSCRIBE,
    subscribeCancel:SUBSCRIBE_CANCEL,
    videoLike:VIDEO_LIKE,
    videoDislike:VIDEO_DISLIKE,
    videoLikeCancle:VIDEO_LIKE_CANCLE,
    videoDislikeCancle:VIDEO_DISLIKE_CANCLE,
    commentLike:COMMENT_LIKE,
    commentDislike:COMMENT_DISLIKE,
    commentLikeCancle:COMMENT_LIKE_CANCLE,
    commentDislikeCancle:COMMENT_DISLIKE_CANCLE,
    wl:WATCH_LIST,
    wlCancel:WATCH_LIST_CANCEL,
    deleteComment:(id) =>{
        if(id){
            return `/api/${id}/comment/delete`
        }else{
            return COMMENT_DELETE;
        }
    },
    deleteVideo : (id) =>{
        if(id){
            return `/api/${id}/video/delete`
        }else{
            return DELETE_VIDEO;
        }
    }
}

export default routes;