import "reflect-metadata";
import "./alias";
import * as express from "express";
import { Request, Response, NextFunction } from "express";
import { App } from "./app";
import { container } from "src/di";

(async () => {
  // const app = new App();
  const app = container.get(App);
  await app.init();
  await app.listen();
})();
