export function up(queryInterface, Sequelize) {
  return queryInterface.createTable('empresas', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name_fantasia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    razao_social: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cnpj: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    rua: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    numero: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    uf: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    celular: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
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
}
export function down(queryInterface) {
  return queryInterface.dropTable('empresas');
}
