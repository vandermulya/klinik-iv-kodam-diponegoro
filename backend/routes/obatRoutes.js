import express from "express";
const router = express.Router();
import {
    adminGuard,
    authGuard
} from "../middleware/authMiddleware";
import {
    createObat,
    deleteObat,
    getObat,
    getSingleObat,
    updateObat
} from "../controllers/obatControllers";

router.route("/").post(authGuard, adminGuard, createObat).get(getObat);
router
    .route("/:slug")
    .put(authGuard, adminGuard, updateObat)
    .delete(authGuard, adminGuard, deleteObat)
    .get(getSingleObat);

export default router;