import { Router } from 'express';

import EmpresaController from './app/controllers/EmpresaController';

const routes = new Router();

routes.post('/empresas', EmpresaController.store);

export default routes;
