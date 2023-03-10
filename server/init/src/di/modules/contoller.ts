import { ContainerModule, interfaces } from "inversify";
import { CONTROLLER } from "src/di/symbols/controller";
import { MainController } from "src/controllers";
import { IMainController } from "src/types/interface/controller";

export const ControllerModule = new ContainerModule(
  (bind: interfaces.Bind, unbind: interfaces.Unbind) => {
    bind(CONTROLLER.MAIN).to(MainController).inSingletonScope();
  }
);
