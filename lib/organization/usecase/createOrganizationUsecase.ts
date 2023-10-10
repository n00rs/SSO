import IOrganization from "../../../common/interfaces/Organization";
import errHandler from "../../../common/utilities/errorHandler";
import getDBConnection from "../../../common/utilities/postgreSQLHandler";

export function createOrganizationUseCaseFactory(organizationModel, createOrganizationDB) {
    return async function createOrganizationUseCase(organizationBody: IOrganization) {
        let dbConnection = await getDBConnection(); //terminate the connection .....
        try {
            const objOrganizationModel = organizationModel(organizationBody);
            let objDBResult = await createOrganizationDB({
                ...objOrganizationModel,
                dbConnection
            });


            return { ...objOrganizationModel, intPk: objDBResult?.['pkOrganizationId'] };
        } catch (error) {

            throw new errHandler(error);
        }

    }
}