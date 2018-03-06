'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Medcins', [
        {
          firstName: 'Saad',
          lastName: 'Med',
          dateDeNaissance: Sequelize.NOW,
          sexe: 'Masculin',
          specialty: 'Medcin',
          email: 'saad@gmail.com',
          password: '0000'
        }, {
          firstName: 'Ali',
          lastName: 'Cheikh',
          dateDeNaissance: Sequelize.NOW,
          sexe: 'Masculin',
          specialty: 'Chirigien',
          email: 'aliCCheikh@gmail.com',
          password: '123'
        } ,{
        firstName: 'Sidi',
        lastName: 'Brahim',
        dateDeNaissance: Sequelize.NOW,
        sexe: 'Masculin',
        specialty: 'ssss',
        email: 'sidiBr@gmail.com',
        password: '12345'
      },{
          firstName: 'Aala',
          lastName: 'Tewvigh',
          dateDeNaissance: Sequelize.NOW,
          sexe: 'Masculin',
          specialty: 'aaaa',
          email: 'aalaTew@gmail.com',
          password: '1452'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Medcins', null, {});
  }
};

