import routes from "./routes";

export const localMiddleware = (req,res,next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes
    res.locals.channel = {
        isAuthenticated:true,
        id:1,
        name: "min tec",
    }
    res.locals.domain=`http://localhost:2000`
    next();
}