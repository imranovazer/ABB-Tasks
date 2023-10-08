import * as express from "express";
import NewsController from "../controllers/NewsController.ts";

const router = express.Router();

router.route("/").get(NewsController.getNews).post(NewsController.createNew);

router
  .route("/:id")
  .get(NewsController.getById)
  .put(NewsController.editNew)
  .delete(NewsController.deleteNew);

export default router;
