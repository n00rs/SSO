import { createOrganizationUseCase } from "../usecase/index";
import { createOrganizationControllerFactory } from "./createOrganizationController";

export const createOrganizationController = createOrganizationControllerFactory(createOrganizationUseCase);
