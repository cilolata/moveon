import ModelEmpresas from '../models/ModelEmpresas';

const empresas = new ModelEmpresas();
export default (app) => {
  app.get('/empresas', (req, res) => {
    empresas.lista(res);
  });

  app.get('/empresas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    empresas.buscaPorId(id, res);
  });

  app.post('/empresas', (req, res) => {
    const empresa = req.body;

    empresas.adiciona(empresa, res);
  });

  app.put('/empresas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    empresas.altera(id, valores, res);
  });

  app.delete('/empresas/:id', (req, res) => {
    const id = parseInt(req.params.id);

    empresas.deleta(id, res);
  });
};
