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
  }
}

export default Empresa;
