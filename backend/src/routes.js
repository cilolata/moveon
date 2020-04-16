import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import EmpresaController from './app/controllers/EmpresaController';
import EnderecoController from './app/controllers/EnderecoController';
import UserController from './app/controllers/UserController';
import AparelhoController from './app/controllers/AparelhoController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

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

routes.post('/aparelhos', AparelhoController.store);
routes.get('/aparelhos', AparelhoController.index);
routes.put('/aparelhos/:id', AparelhoController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
