import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import EmpresaController from './app/controllers/EmpresaController';
import EnderecoController from './app/controllers/EnderecoController';
import UserController from './app/controllers/UserController';
import AparelhoController from './app/controllers/AparelhoController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import ClienteController from './app/controllers/ClienteController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware);
routes.post('/empresas', EmpresaController.store);
routes.post('/clientes', ClienteController.store);

// routes.get('/users', UserController.index);
routes.get('/users/show', UserController.show);
routes.put('/users', UserController.update);
routes.delete('/users', UserController.delete);

routes.post('/enderecos', EnderecoController.store);
routes.get('/enderecos', EnderecoController.index);
routes.get('/enderecos/:id', EnderecoController.show);
routes.put('/enderecos/:id', EnderecoController.update);
routes.delete('/enderecos/:id', EnderecoController.delete);

routes.get('/empresas', EmpresaController.index);
routes.get('/empresas/show', EmpresaController.show);
routes.get('/aparelhos', AparelhoController.index);

routes.put('/empresas/:id', EmpresaController.update);
routes.delete('/empresas/:id', EmpresaController.delete);

routes.post('/aparelhos', AparelhoController.store);
routes.get('/aparelhos/:id', AparelhoController.show);
routes.put('/aparelhos/:id', AparelhoController.update);
routes.delete('/aparelhos/:id', AparelhoController.delete);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/files', FileController.index);
routes.get('/files/:id', FileController.show);
routes.post('/files/:id', FileController.update);
routes.delete('/files/:id', FileController.delete);

routes.get('/clientes', ClienteController.index);

export default routes;
