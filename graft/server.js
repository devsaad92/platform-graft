import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { execute, subscribe } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { createServer } from 'http';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import nodemailer from 'nodemailer';
import path from 'path';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import jwt from 'jsonwebtoken';

import models from './src/models';
import { refreshTokens } from './src/auth';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/schema')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './src/resolvers')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  port: 25,
  secure: false,
  auth: {
    user: 'saad91.med@gmail.com',
    pass: 'hdfhfjdjgf14522',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const PORT = 3000;
const app = express();


const SECRET = 'aslkdjlkaj10830912039jlkoaiuwerasdjflkasd';
const SECRET2 = 'asdf1093KMnzxcvnkljvasdu09123nlasdasdf';

app.use('*', cors());

const addUser = async (req, res, next) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      const { user } = jwt.verify(token, SECRET);
      req.user = user;
    } catch (err) {
      const refreshToken = req.headers['x-refresh-token'];
      const newTokens = await refreshTokens(token, refreshToken, models, SECRET, SECRET2);
      if (newTokens.token && newTokens.refreshToken) {
        res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
        res.set('x-token', newTokens.token);
        res.set('x-refresh-token', newTokens.refreshToken);
      }
      if (newTokens.user) {
        req.user = newTokens.user;
      }
    }
  }
  next();
};

app.use(addUser);

app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({
  schema,
  context: {
    models,
    user: req.user,
    SECRET,
    SECRET2,
    transporter,
  },
})));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
}));

const server = createServer(app);

models.sequelize.sync().then(() =>
  server.listen(PORT, () => {
    console.log(`Apollo Server is now running on http://localhost:${PORT}`);
    // eslint-disable-next-line
    new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
      }, {
        server,
        path: '/subscriptions',
      });
  }));

