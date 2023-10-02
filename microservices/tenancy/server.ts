import * as express from 'express';
import tenancyRouter from '../tenancy/routes';
import { SERVICE_RUNNING } from '../../common/constants/messages';
import { loadEnv } from '../../common/utilities/loadEnv';

const app = express();

loadEnv();
const port: number = Number(process.env.PORT || 3000);

app.use(express.json());


app.use('/api/tenancy', tenancyRouter);

app.listen(port, () => {
    console.log(SERVICE_RUNNING('Tenancy', port));
});

module.exports = app;