//import _ from 'lodash';
import bcrypt from 'bcrypt';
const models = require('../models');
const pubsub  = require('./Subscription');


async function createMedcin(parent, args, context, info) {
    const medcin = args
    medcin.password = await  bcrypt.hash(medcin.password, 12)
    return models.Medcin.create(medcin)
   /*  .then((medcin) => {
        pubsub.publish('MEDCIN_ADDED', { newMedcin: { medcin } })
    })
 */

  /* const medcinAdded = await models.Medcin.create(medcin)
    if (!medcinAdded)
        throw new Error("Medcin does not exist")
    pubsub.publish('MEDCIN_ADDED', { newMedcin:{ medcinAdded } })
    return medcinAdded  */
} 


async function updateMedcin(parent, args, context, info) {
    const medcin = await models.Medcin.findById(args['id'])
    // const valid = await bcrypt.compare(args.password, medcin.password)

    if (args.password != medcin.password) {
        args.password = await bcrypt.hash(args.password, 12)
    }

    models.Medcin.findById(args['id']).then((medcin)=> {
        medcin.update(args).then(() => {
        return medcin
        })
    })
      
} 


function deleteMedcin(parent, args, context, info) {
    models.Medcin.findById(args['id']).then((medcin) => {
        if(medcin)
        return medcin.destroy()

        console.log("error !")       
    })    
}

export { createMedcin, updateMedcin, deleteMedcin }