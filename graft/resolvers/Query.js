
export default {
    medcinQuery: (parent, args, { models }) => models.Medcin.find({ where: args }),
    allMedcins: (parent, args, { models }) => models.Medcin.findAll()
}
