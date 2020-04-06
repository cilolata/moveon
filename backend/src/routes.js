import { Router } from 'express';

import EmpresaController from './app/controllers/EmpresaController';

const routes = new Router();

routes.post('/empresas', EmpresaController.store);
routes.get('/empresas', EmpresaController.index);
routes.get('/empresas/:id', EmpresaController.show);
routes.put('/empresas/:id', EmpresaController.update);
routes.delete('/empresas/:id', EmpresaController.delete);

export default routes;
