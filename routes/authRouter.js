import express from "express";
import {login, register} from "../controllers/authControllers.js";
import validateBody from "../helpers/validateBody.js";
import {userSignInSchema, userSignupSchema} from "../schemas/userSchemas.js";

const registerMiddleware = validateBody(userSignupSchema);
const loginMiddleware = validateBody(userSignInSchema);

const authRouter = express.Router();

authRouter.post("/register", registerMiddleware, register);
authRouter.post("/login", loginMiddleware, login);

export default authRouter;
