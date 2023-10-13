import fs from "fs/promises";
import { Request, Response, NextFunction } from "express";
//{METHOD} {URL} query:{QUERYPARAMS} body:{BODY}
export const Logger = (req: Request, res: Response, next: NextFunction) => {
  fs.writeFile(
    "logs.txt",
    `${req.method} ${req.url} query:${JSON.stringify(
      req.query
    )} body: ${JSON.stringify(req.params)} \n`,
    {
      flag: "a",
    }
  );

  return next();
};
