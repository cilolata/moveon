import EmpresaController from './app/controllers/EmpresaController';

const { Router } = require('express');

const routes = new Router();

routes.post('/empresas', EmpresaController.store);

export default routes;
