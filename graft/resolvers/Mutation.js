const models = require('../models');

function createMedcin(parent, args, context, info) {
    //const { firstName, lastName, speciality, email, password } = args
    //console.log(args)
    return models.Medcin.create(args)
} 


function updateMedcin(parent, args, context, info) {

    models.Medcin.findById(args['id']).then((medcin)=> {
        medcin.update(args).then(() => {
            //console.log(medcin)
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

module.exports = { createMedcin, updateMedcin, deleteMedcin };