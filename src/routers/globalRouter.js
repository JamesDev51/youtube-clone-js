import express from "express"
import routes from "../routes"
import passport from "passport"
import { home } from "../controllers/videoControllers"
import { getLogin, githubLogin, googleLogin, kakaoLogin, logout, naverLogin, postGithubLogin, postGoogleLogin, postKakaoLogin, postLogin, postNaverLogin } from "../controllers/userControllers"
import { onlyPublic } from "../middlewares"

const globalRouter = express.Router()

//home
globalRouter.get(routes.home, home)

//login
globalRouter.get(routes.login,onlyPublic, getLogin)
globalRouter.post(routes.login,onlyPublic, postLogin)

//sosial login (google / kakao / naver / github)
globalRouter.get(routes.google,googleLogin);
globalRouter.get(routes.googleCallback,passport.authenticate('google',{failureRedirect:'/login'}),postGoogleLogin)

globalRouter.get(routes.kakao,kakaoLogin);
globalRouter.get(routes.kakaoCallback,passport.authenticate('kakao',{failureRedirect:'/login'}),postKakaoLogin)

globalRouter.get(routes.naver,naverLogin);
globalRouter.get(routes.naverCallback,passport.authenticate('naver',{failureRedirect:'/login'}),postNaverLogin)

globalRouter.get(routes.github,githubLogin);
globalRouter.get(routes.githubCallback,passport.authenticate('github',{failureRedirect:'/login'}),postGithubLogin)

//logout
globalRouter.get(routes.logout,logout)

export default globalRouter