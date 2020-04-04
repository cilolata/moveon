import Sequelize from 'sequelize';

import Empresa from '../app/models/Empresa';

import databaseConfig from '../config/database';

const models = [Empresa];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
