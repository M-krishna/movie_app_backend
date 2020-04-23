# Minimalistic Backend for Movie App

## <a href="#server">Server</a>
The server is built using NodeJS and Express.

The server is backend that powers the Movie App platform. It is RESTful and communicates with all distributed systems 
using REST over HTTP?HTTPS. 

Server Entry point is at `index.ts`

For Development Server is started using `yarn dev`

You can start the server in different ways that suits your needs. Check the scripts section of `package.json` section
to discover more ways.

## First things first
Install the required packages using `yarn` command. This will install all the dependencies required by the project.

Be sure to install mongoDB before starting the server. For installation of mongoDB refer this [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mongodb-community-edition)

## Customise
The `tsconfig.json` holds the info about all the typescript config. Before changing anything be sure how to revert it back if something goes wrong.
