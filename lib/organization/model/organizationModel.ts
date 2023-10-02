import IOrganization from "../../../common/interfaces/Organization";
import errHandler from "../../../common/utilities/errorHandler";

/**
 * 
 */
export default function OrganizationModelFactory() {
    return function OrganizationModel(organizationBody: IOrganization) {
        
        let errHandlerInstance = new errHandler();

        try {
            if(!organizationBody.organization_name) errHandlerInstance.addError('ORGANIZATION_NAME_SHOULD_NOT_BE_EMPTY');
            if(!organizationBody.email) errHandlerInstance.addError('EMAIL_SHOULD_NOT_BE_EMPTY');
            if(!organizationBody.phone) errHandlerInstance.addError('PHONE_SHOULD_NOT_BE_EMPTY');
            if(!organizationBody.address) errHandlerInstance.addError('ADDRESS_SHOULD_NOT_BE_EMPTY');

            if(errHandlerInstance.hasErrors()){
                errHandlerInstance.setStatusCode(500);
                throw errHandlerInstance;
            }

            /**
             * Organization Model
             */
            let Organization = {
                organization_name: organizationBody.organization_name,
                email: organizationBody.email,
                phone: organizationBody.phone,
                address: organizationBody.address,
            };

            /**
             * Returning immutable Organization object
             */
            return Object.freeze(Organization);
        } catch (error) {
            throw new errHandler(error);
        }

    }
}