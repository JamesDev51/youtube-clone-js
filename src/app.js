console.clear();
import express from "express";

//middlewares
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import multer from "multer"
import cors from "cors"
import methodOverride from "method-override"
import session from "express-session"
import { localMiddleware } from "./middlewares";
import path from "path"


//routers
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import videoRouter from "./routers/videoRouter";
import playlistRouter from "./routers/playlistRouter";
import feedRouter from "./routers/feedRouter";
import channelRouter from "./routers/channelRouter";
import userRouter from "./routers/userRouter"
import joinRouter from "./routers/joinRouter"
import sdChannelRouter from "./routers/sdChannelRouter";

const app = express();

app.set("view engine","pug");
app.set("views", "src/views");
app.use("/uploads",express.static("uploads"))
app.use("/static",express.static(__dirname+"/static"))
app.use("/img",express.static(path.join(__dirname,'/img')))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet({contentSecurityPolicy:false}));
app.use(compression());
app.use(morgan("tiny"));

app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.join, joinRouter)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.studio,sdChannelRouter);
app.use(routes.playlist,playlistRouter);
app.use(routes.feed, feedRouter);
app.use(routes.channel,channelRouter);

export default app;
