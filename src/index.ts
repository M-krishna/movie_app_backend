import { Server } from './server'

const server = new Server()

server.listen(port => {
    console.log(`Server is listening on http://localhost:${port}`);
})

// const app = express();

// initialize(app);

// movieRoutes.forEach(controller => {
//     app.use(`/${config.VERSION}/api`, controller.router);
// });

// export { app };