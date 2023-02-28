import * as Joi from "joi";
import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

export const validate = (schema: ObjectSchema) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const { error, value } = schema.validate(request.query);

    if (!error) {
      request.query = value;
      next();
    } else {
      next(new Error(error.message));
    }
  };
};
