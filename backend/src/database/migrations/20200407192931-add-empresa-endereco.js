module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('enderecos', 'empresa_id', {
      type: Sequelize.INTEGER,
      references: { model: 'empresas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNul: false,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('enderecos', 'empresa_id');
  },
};
