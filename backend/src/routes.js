import { Router } from 'express';

import EmpresaController from './app/controllers/EmpresaController';
import EnderecoController from './app/controllers/EnderecoController';
import UserController from './app/controllers/UserController';

const routes = new Router();
routes.post('/users', UserController.store);
// routes.get('/users', UserController.index);
// routes.get('/users/:id', UserController.show);
// routes.put('/users/:id', UserController.update);
// routes.delete('/users/:id', UserController.delete);

routes.post('/enderecos', EnderecoController.store);
routes.get('/enderecos', EnderecoController.index);
routes.get('/enderecos/:id', EnderecoController.show);
routes.put('/enderecos/:id', EnderecoController.update);
routes.delete('/enderecos/:id', EnderecoController.delete);

routes.post('/empresas', EmpresaController.store);
routes.get('/empresas', EmpresaController.index);
routes.get('/empresas/:id', EmpresaController.show);
routes.put('/empresas/:id', EmpresaController.update);
routes.delete('/empresas/:id', EmpresaController.delete);

export default routes;
