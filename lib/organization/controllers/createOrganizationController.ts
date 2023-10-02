import ErrHandler from "../../../common/utilities/errorHandler";

export function createOrganizationControllerFactory(createOrganizationUseCase) {

    return async function createOrganizationController(requestBody: any){

        try {
            const organizationCreationResponse = await createOrganizationUseCase(requestBody);

            return organizationCreationResponse;
        } catch (error) {

            throw new ErrHandler(error);
        }

    }

}