import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        type: Sequelize.CHAR,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasOne(models.Cliente, {
      foreignKey: 'user_id',
      as: 'cliente',
    });

    this.hasOne(models.Empresa, {
      foreignKey: 'user_id',
      as: 'empresa',
    });

    this.hasMany(models.Endereco, {
      foreignKey: 'user_id',
      as: 'endereco',
    });
  }
}

export default User;
