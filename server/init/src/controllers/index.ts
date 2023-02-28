import { Router, Request, Response, NextFunction } from "express";
import { wrapper } from "../middlewares/wrapper";

export class MainController {
  private readonly _router: Router;

  constructor() {
    this._router = Router();

    this._router.get("/main", wrapper(this.main));
  }

  get router() {
    return this._router;
  }

  public main = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      message: "success",
    });
  };
}
