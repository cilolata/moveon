import ModelUsers from '../models/ModelUsers';

const users = new ModelUsers();

module.exports = (app) => {
  app.get('/users', (req, res) => {
    users.lista(res);
  });

  app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    users.buscaPorId(id, res);
  });

  app.post('/users', (req, res) => {
    const user = req.body;

    users.adiciona(user, res);
  });

  app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    users.altera(id, valores, res);
  });

  app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);

    users.deleta(id, res);
  });
};
