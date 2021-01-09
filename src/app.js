console.clear();
import express from "express";

//middlewares
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import path from "path"
import { localMiddleware } from "./middlewares";
import mongoose from "mongoose"
import session from "express-session"
import MongoStore from "connect-mongo"
import passport from "passport";
import "../passport"

import dotenv from "dotenv"
dotenv.config()


//routers
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import videoRouter from "./routers/videoRouter";
import playlistRouter from "./routers/playlistRouter";
import searchRouter from "./routers/searchRouter";
import feedRouter from "./routers/feedRouter";
import channelRouter from "./routers/channelRouter";
import userRouter from "./routers/userRouter"
import joinRouter from "./routers/joinRouter"
import sdChannelRouter from "./routers/sdChannelRouter";
import apiRouter from "./routers/apiRouter"

const app = express();

const CookieStore = MongoStore(session)

app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use("/static",express.static(__dirname+"/static"))
app.use("/img",express.static(path.join(__dirname,'/img')))
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(helmet({contentSecurityPolicy:false}));
app.use(compression());
app.use(morgan("dev"));
app.use(session({ 
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    store : new CookieStore({mongooseConnection:mongoose.connection})
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.join, joinRouter)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.studio,sdChannelRouter);
app.use(routes.playlist,playlistRouter);
app.use(routes.feed, feedRouter);
app.use(routes.search, searchRouter);
app.use(routes.channel,channelRouter);
app.use(routes.api,apiRouter);



export default app;
