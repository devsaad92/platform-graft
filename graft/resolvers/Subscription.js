import { PubSub } from 'graphql-subscriptions'
// import { withFilter } from 'graphql-subscriptions';


export const pubsub = new PubSub();


const medcinAdded = {
    medcinAdded: {
        subscribe: () => pubsub.asyncIterator('MEDCIN_ADDED'),
    },
}

module.exports = { medcinAdded, pubsub }





