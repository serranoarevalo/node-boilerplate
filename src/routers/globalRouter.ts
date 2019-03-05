import express from "express";
import { home } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;
