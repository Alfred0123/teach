import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { wrapper } from "@/middlewares/wrapper";
import { MainController } from "src/controllers";

export class App {
  private readonly _app;
  constructor() {
    const mainController = new MainController();

    this._app = express();

    this._app.use(mainController.router);

    this._app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!!!");
    });

    this._app.get(
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

    this._app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send(err.message);
    });
  }

  public listen = async (port: number = 3000) => {
    return this._app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  };
}
