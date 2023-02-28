import * as express from "express";
import { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

const wrapper = (fn: Function) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      next(e);
    }
  };
};

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!!");
});

app.get(
  "/throw",
  (req, res, next) => {
    try {
      console.log("error1");
      throw new Error("error1");
    } catch (e) {
      next();
    }
  },
  wrapper(async (req: Request, res: Response) => {
    console.log("error2");
    throw new Error("error2");
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
