const models = require('../models');
const { PubSub } = require('graphql-subscriptions');
import { withFilter } from 'graphql-subscriptions';


export const pubsub = new PubSub();

function newMedcin(){
    subcribe: async () =>{ return  await pubsub.asyncIterator('MEDCIN_ADDED') }
}


module.exports = { newMedcin, pubsub }





