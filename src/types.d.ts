import { NextFunction, Request, Response, RequestHandler } from "express";

export type Controller = (
  req: Request & { user: any; flash: RequestHandler },
  res: Response,
  next: NextFunction
) => any;
