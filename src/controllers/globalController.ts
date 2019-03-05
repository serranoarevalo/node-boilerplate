import { Controller } from "../types";

export const home: Controller = (req, res) =>
  res.render("index", { title: "Home" });
