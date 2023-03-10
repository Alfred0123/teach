import { Container } from "inversify";
import { App } from "src/app";
import { ControllerModule } from "./modules/contoller";

const container = new Container({
  autoBindInjectable: true,
  // defaultScope: "Singleton",
});
container.load(ControllerModule);

export { container };
