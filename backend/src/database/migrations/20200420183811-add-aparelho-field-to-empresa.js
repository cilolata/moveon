'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'aparelhos',
        'empresa_id',
        {
          type: Sequelize.INTEGER,
          references: { model: 'empresas', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNul: false,

        }
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('aparelhos', 'empresa_id');
  }
};