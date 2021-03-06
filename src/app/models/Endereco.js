import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.CHAR,
        cep: Sequelize.STRING,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    // this.belongsTo(models.Empresa, {
    //   foreignKey: 'user_id',
    //   as: 'endereco',
    // });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'endereco',
    });
  }
}

export default Endereco;
