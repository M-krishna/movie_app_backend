import { Application } from 'express';
import loadExpress from './express';

export default (app: Application) => {
    loadExpress(app);
    console.log("Express Loaded");
}