import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import EmpresaController from './app/controllers/EmpresaController';
import EnderecoController from './app/controllers/EnderecoController';
import UserController from './app/controllers/UserController';
import AparelhoController from './app/controllers/AparelhoController';
import FileController from './app/controllers/FileController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);
routes.post('/empresas', EmpresaController.store);

routes.use(authMiddleware);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/enderecos', EnderecoController.store);
routes.get('/enderecos', EnderecoController.index);
routes.get('/enderecos/:id', EnderecoController.show);
routes.put('/enderecos/:id', EnderecoController.update);
routes.delete('/enderecos/:id', EnderecoController.delete);

routes.get('/empresas', EmpresaController.index);
routes.get('/empresas/:id', EmpresaController.show);
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
routes.delete('/files/:id', FileController.delete);

export default routes;
