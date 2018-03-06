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

function medcin(_, args) {
    return models.Medcin.find({ where: args });
 }


function allMedcins(_, args) {
    return models.Medcin.findAll();    
}
 

module.exports = {medcin, allMedcins};