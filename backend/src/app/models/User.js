import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  // static associate(models) {
  //   this.hasMany(models.Endereco, {
  //     foreignKey: 'empresa_id',
  //     as: 'endereco',
  //   });
  // }
}

export default User;
