import { Container } from "inversify";
import { App } from "src/app";

const container = new Container({
  autoBindInjectable: true,
  // defaultScope: "Singleton",
});

export { container };
