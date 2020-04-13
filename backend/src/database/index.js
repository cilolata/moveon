import Sequelize from 'sequelize';

import Endereco from '../app/models/Endereco';
import Empresa from '../app/models/Empresa';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [Endereco, Empresa, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
