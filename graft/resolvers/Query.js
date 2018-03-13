const models = require('../models');
/*
const resolvers = {
    Query: {
        medcin(_, args) {
            return models.Medcin.find({ where: args });
        },
        allMedcins(_, args) {
            return models.Medcin.findAll();
        }
    }
}
 */

// import { models } from '../models';

function medcinQuery(_, args) {
    return models.Medcin.find({ where: args });
 }


function allMedcins(_, args) {
    return models.Medcin.findAll();    
}
 

module.exports = { medcinQuery, allMedcins};