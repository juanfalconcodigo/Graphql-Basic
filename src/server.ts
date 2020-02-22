import express from 'express';
import cors from 'cors';
import compression from 'compression';
//no lo vamos a usar con express-graphql
import { ApolloServer, gql } from 'apollo-server-express';

import schema from './schemas';
import { createServer } from 'http';



const server = new ApolloServer({ schema,introspection:true });
const app=express();
server.applyMiddleware({ app });

app.use(cors({origin:true,credentials:true}));
app.use(compression());


const httpServer=createServer(app);




httpServer.listen(4000,()=>{
    console.log(`Now browse to http://localhost:4000${server.graphqlPath}`);
});

