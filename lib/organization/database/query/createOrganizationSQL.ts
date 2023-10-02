export const createOrganizationQuery = `
INSERT INTO tbl_organization(
    organization_name,
    email,
    phone,
    address
)
VALUES(
    $1,$2,$3,$4
)
RETURNING
    organization_id   AS "pkOrganizationId",
    organization_name AS "organizationName",
    email             AS "organizationEmail",
    address           AS "organizationAddress"
`;