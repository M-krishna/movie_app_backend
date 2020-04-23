import { Application } from 'express'

import { app } from './index';
import connect from './connect';
import config from './common/config';

function startServer(expressApp: Application): void {
    connect(config.DB);
    expressApp.listen(config.PORT, () => {
        console.log(`Server started on port ${config.PORT}`);
    });
}

startServer(app);