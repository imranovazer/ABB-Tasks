import * as express from "express";
import { UserController } from "../controllers/UserController.ts";
import { protect } from "../middlevire/protect.ts";
const router = express.Router();

router.route("/register").post(UserController.register);
router.route("/login").post(UserController.login);

router.use(protect);

router.route("/").get(UserController.getAll);

export default router;
