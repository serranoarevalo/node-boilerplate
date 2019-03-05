import { Controller } from "./types";

export const localsMiddleware: Controller = (req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.siteName = process.env.SITE_NAME || "";
  next();
};

export const notFound: Controller = (req, res) => {
  res.status(404);
  res.render("404", { title: "Not Found" });
};
