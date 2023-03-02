import { Router, Request, Response, NextFunction } from "express";
import { wrapper } from "../middlewares/wrapper";
import * as Joi from "joi";
import { validate } from "../middlewares/validation";
import { Client } from "pg";

const schema = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().min(10).optional().default(10),
});

export class MainController {
  private readonly _router: Router;

  constructor() {
    this._router = Router();

    this._router.get("/main", validate(schema), wrapper(this.main));

    this._router.get("/pg", wrapper(this.pg));
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

  public pg = async (req: Request, res: Response, next: NextFunction) => {
    console.log("pg");

    const client = await new Client({
      host: "localhost",
      port: 5432,
      user: "postgres",
      password: "password",
    });
    await client.connect();

    const result = await client.query("insert into sample (id) \n values (1)");
    console.log(result);

    return res.status(200).json({
      message: "success",
    });
  };
}
