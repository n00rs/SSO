import { createOrganizationUseCaseFactory } from "./createOrganizationUsecase";
import { organizationModel } from "../model/index"
import { createOrganizationDB } from "../database/index";

export const createOrganizationUseCase = createOrganizationUseCaseFactory(organizationModel, createOrganizationDB);