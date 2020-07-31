module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aparelhos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      peso: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      quantidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      valor_diaria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      file_id: {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNul: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('aparelhos');
  },
};
