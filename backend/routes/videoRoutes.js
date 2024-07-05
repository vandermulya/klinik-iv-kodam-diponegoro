import express from "express";
const router = express.Router();
import {
    createVideo,
    deleteVideo,
    getAllVideos,
    getVideo,
    updateVideo
} from "../controllers/videoControllers";
import {
    authGuard,
    adminGuard
} from "../middleware/authMiddleware";

router.route("/").post(authGuard, adminGuard, createVideo).get(getAllVideos);
router
    .route("/:slug")
    .put(authGuard, adminGuard, updateVideo)
    .delete(authGuard, adminGuard, deleteVideo)
    .get(getVideo);

export default router;