import { Router, Request, Response, NextFunction } from "express";
import { wrapper } from "../middlewares/wrapper";
import * as Joi from "joi";
import { validate } from "../middlewares/validation";

const schema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().min(10).optional().default(10),
});

export class MainController {
  private readonly _router: Router;

  constructor() {
    this._router = Router();

    this._router.get("/main", validate(schema), wrapper(this.main));
  }

  get router() {
    return this._router;
  }

  public main = async (req: Request, res: Response, next: NextFunction) => {
    console.log({ query: req.query });

    return res.status(200).json({
      message: "success",
    });
  };
}
