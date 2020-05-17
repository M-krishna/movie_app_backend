import express, { Application } from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';


// import { app } from './index';
import connect from './connect';
import config from './common/config';

import MovieRoutes from './controllers/serviceFactory'

// function startServer(expressApp: Application): void {
//     connect(config.DB);
//     expressApp.listen(config.PORT, () => {
//         console.log(`Server started on port ${config.PORT}`);
//     });
// }

// startServer(app);

export class Server {
    public app!: Application;
    private readonly DEFAULT_PORT = config.PORT
    private readonly VERSION = config.VERSION
    private readonly DB = config.DB

    constructor () {
        this.initialize()
        this.handleRoutes()
    }

    public initialize(): void {
        this.app = express()
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        connect(this.DB)
    }

    public handleRoutes(): void {
        MovieRoutes.forEach(controller => {
            this.app.use(`/${this.VERSION}/api`, controller.router)
        })
    }

    public listen(callback: (port: number) => void): void {
        this.app.listen(this.DEFAULT_PORT, () => {
            callback(this.DEFAULT_PORT)
        })
    }
}