import Sequelize, { Model } from 'sequelize';

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_fantasia: Sequelize.STRING,
        razao_social: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Endereco, {
      foreignKey: 'empresa_id',
      as: 'endereco',
    });
  }
}

export default Empresa;
