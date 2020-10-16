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

//routers
import routes from "./routes"
import globalRouter from "./routers/globalRouter"
import videoRouter from "./routers/videoRouter";
import studioRouter from "./routers/studioRouter";
import playlistRouter from "./routers/playlistRouter";
import feedRouter from "./routers/feedRouter";
import channelRouter from "./routers/channelRouter";

const app = express();

app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet({contentSecurityPolicy:false}));
app.use(compression());
app.use(morgan("tiny"));

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.video, videoRouter);
app.use(routes.studio,studioRouter);
app.use(routes.playlist,playlistRouter);
app.use(routes.feed, feedRouter);
app.use(routes.channel,channelRouter)

export default app;
