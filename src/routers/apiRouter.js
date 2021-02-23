import express from "express"
import { postAddComment, postAddReply, postCancleDislikeVD, postCancleLikeCM, postCancleLikeVD,postCancleDislikeCM, postRegisterDislikeCM, postRegisterDislikeVD, postRegisterLikeCM, postRegisterLikeVD, postRegisterView, postSaveVideo, postCancelVideo, postSubscribe, postCancelSubscribe, postDeleteComment, postDeleteVideo, getDeleteVideo, deleteVideo, deleteComment } from "../controllers/apiController"
import routes from "../routes"

const apiRouter = express.Router()

//video
apiRouter.get(routes.deleteVideo(), deleteVideo)
apiRouter.get(routes.deleteComment(),deleteComment)
apiRouter.post(routes.registerView,postRegisterView)

//video like
apiRouter.post(routes.videoLike,postRegisterLikeVD)
apiRouter.post(routes.videoDislike,postRegisterDislikeVD)
apiRouter.post(routes.videoLikeCancle,postCancleLikeVD)
apiRouter.post(routes.videoDislikeCancle,postCancleDislikeVD)

//comment 
apiRouter.post(routes.addComment,postAddComment)
apiRouter.post(routes.addReply,postAddReply)
apiRouter.post(routes.commentLike,postRegisterLikeCM)
apiRouter.post(routes.commentDislike,postRegisterDislikeCM)
apiRouter.post(routes.commentLikeCancle,postCancleLikeCM)
apiRouter.post(routes.commentDislikeCancle,postCancleDislikeCM)

//channel
apiRouter.post(routes.wl,postSaveVideo)
apiRouter.post(routes.wlCancel,postCancelVideo)
apiRouter.post(routes.subscribe,postSubscribe)
apiRouter.post(routes.subscribeCancel,postCancelSubscribe)

export default apiRouter