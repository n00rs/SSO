import errHandler from "../../../common/utilities/errorHandler";

export function createOrganizationDBFactory(query) {
    return async function createOrganizationDB({
        dbConnection = null,
        organization_name = '',
        email = '',
        phone = '',
        address = '',
    } = {}) {
        try {
            const { rows: arrQueryResult } = await dbConnection.query(query, [
                organization_name,
                email,
                phone,
                address
            ]);
            return arrQueryResult?.[0];
        } catch (error) {
            throw new errHandler(error);
        }

    }
}