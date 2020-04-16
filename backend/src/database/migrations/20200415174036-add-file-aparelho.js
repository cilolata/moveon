module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('aparelhos', 'foto_aparelho_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('aparelhos', 'foto_aparelho_id');
  },
};
