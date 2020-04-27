import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class Empresa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_fantasia: Sequelize.STRING,
        razao_social: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (empresa) => {
      if (empresa.password) {
        empresa.password_hash = await bcrypt.hash(empresa.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    // this.hasMany(models.Endereco, {
    //   foreignKey: 'empresa_id',
    //   as: 'endereco',
    // });

    this.hasMany(models.Aparelho, {
      foreignKey: 'empresa_id',
      as: 'aparelho',
    });

    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'userEmpresa',
    });
  }
}

export default Empresa;
