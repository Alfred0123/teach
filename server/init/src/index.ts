import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { App } from "./app";

(async () => {
  const app = new App();
  await app.listen();
})();
