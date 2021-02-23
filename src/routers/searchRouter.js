import express from "express"
import { search } from "../controllers/videoControllers"
import routes from "../routes"

const searchRouter = express.Router()

//search router
searchRouter.get(routes.result, search)

export default searchRouter