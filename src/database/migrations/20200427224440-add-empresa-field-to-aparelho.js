module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('aparelhos', 'empresa_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'empresas',
        key: 'id',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('aparelhos', 'empresa_id');
  },
};
