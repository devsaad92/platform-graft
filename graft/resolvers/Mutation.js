import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import  { pubsub } from './Subscription'

export default {
    createMedcin: async (parent, args, { models }) => {
        const medcin = args
        medcin.password = await bcrypt.hash(medcin.password, 12)
        const medcinAdded = await models.Medcin.create(medcin)
        pubsub.publish('MEDCIN_ADDED', { medcinAdded, })

        return medcinAdded
    },
    updateMedcin: async (parent, args, { models }) => {
        const medcin = await models.Medcin.findById(args['id'])
        return await medcin.update(args)
    },
    deleteMedcin: async (parent, args, { models }) => {
        models.Medcin.findById(args['id']).then((medcin) => {
            if (medcin)
                return medcin.destroy()

            throw new Error('error id!')
        })
    },
    login: async (parent, args, { models, SECRET }) => {
        const user = await models.Medcin.findOne({ where: { email: args.email } })

        if (!user) {
            throw new Error(`Could not find user with email: ${args.email}`)
        }

        const valid = await bcrypt.compare(args.password, user.password)
        if (!valid) {
            throw new Error('Invalid password')
        }

        const token = jwt.sign(
            {
                user: _.pick(user, ['id', 'firstName', 'lastName', 'email']),
            },
            SECRET,
            {
                expiresIn: '1y',
            },
        );

        return { token }
    }
}

 