import { NextFunction, Request, Response } from "express";

export type Controller = (
  req: Request & { user: any },
  res: Response,
  next: NextFunction
) => any;
