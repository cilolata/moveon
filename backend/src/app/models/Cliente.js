import Sequelize, { Model } from 'sequelize';


class Cliente extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
        cpf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }



  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: 'user_id',
      as: 'users',
    });
  }
}

export default Cliente;
