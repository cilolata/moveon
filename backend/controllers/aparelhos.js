import ModelAparelhos from '../models/ModelAparelhos';

const aparelhos = new ModelAparelhos();

export default (app) => {
  app.get('/aparelhos', (req, res) => {
    aparelhos.lista(res);
  });

  app.get('/aparelhos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    aparelhos.buscaPorId(id, res);
  });

  app.post('/aparelhos', (req, res) => {
    const aparelho = req.body;

    aparelhos.adiciona(aparelho, res);
  });

  app.put('/aparelhos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const valores = req.body;

    aparelhos.altera(id, valores, res);
  });

  app.delete('/aparelhos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    aparelhos.deleta(id, res);
  });
};
