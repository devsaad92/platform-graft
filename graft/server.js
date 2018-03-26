import express  from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import { execute, subscribe } from 'graphql'
import  { createServer } from 'http'
import { SubscriptionServer } from 'subscriptions-transport-ws'

import schema from './schemas/schema'
import models from './models'

const PORT = 3000;
const server = express();
const SECRET = 'aslkdjlkaj10830912039jlkoaiuwerasdjflkasd';

server.use('*', cors())

server.use('/graphql', bodyParser.json(), graphqlExpress({
    schema,
    context: {
        models,
        SECRET
    }
}));

server.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
}));

// Wrap the Express server
const ws = createServer(server);
ws.listen(PORT, () => {
    console.log(`Apollo Server is now running on http://localhost:${PORT}`);
    // Set up the WebSocket for handling GraphQL subscriptions
    new SubscriptionServer({
        execute,
        subscribe,
        schema
    }, {
            server: ws,
            path: '/subscriptions',
        });
});


/* app.use('*',cors())

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


app.listen(3000, () => {
    console.log('Go to http://localhost:3000/graphiql to run queries!');
});
 */