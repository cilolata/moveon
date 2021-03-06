import Sequelize, { Model } from 'sequelize';

class Aparelho extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        descricao: Sequelize.STRING,
        peso: Sequelize.STRING,
        quantidade: Sequelize.STRING,
        valor_diaria: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, {
      foreignKey: 'file_id',
      as: 'foto',
    });

    this.belongsTo(models.Empresa, {
      foreignKey: 'empresa_id',
      as: 'empresa',
    });
  }
}

export default Aparelho;
