import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: Sequelize.STRING,
        numero: Sequelize.STRING,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
        uf: Sequelize.CHAR,
        telefone: Sequelize.STRING,
        celular: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Endereco;
