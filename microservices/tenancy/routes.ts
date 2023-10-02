import * as express from 'express';
import handleApiResponse from "../../common/utilities/handleExpressApiResponse";
import { createOrganizationController } from '../../lib/organization/controllers';

const router = express();

router.post('/create_organization', handleApiResponse(createOrganizationController));

export default router;