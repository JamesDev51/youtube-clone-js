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