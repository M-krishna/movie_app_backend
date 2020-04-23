import express from 'express';

import initialize from './loaders';
import config from './common/config';
import movieRoutes from './controllers/MovieControllers/serviceFactory';

const app = express();

initialize(app);

movieRoutes.forEach(controller => {
    app.use(`/${config.VERSION}/api`, controller.router);
});

export { app };