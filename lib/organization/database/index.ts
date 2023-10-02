import { createOrganizationDBFactory } from "./createOrganizationDB";
import { createOrganizationQuery } from "./query/createOrganizationSQL";

export const createOrganizationDB = createOrganizationDBFactory(createOrganizationQuery)
