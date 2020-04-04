const modelAparelhos = require('../models/modelAparelhos');


module.exports = app => {

    app.get('/aparelhos', (req, res) => {
        modelAparelhos.lista(res);
    });

    app.get('/aparelhos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        modelAparelhos.buscaPorId(id, res);
    });
   
    app.post('/aparelhos', (req, res) => {
        const aparelho = req.body;

        modelAparelhos.adiciona(aparelho, res);
    });

    app.put('/aparelhos/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        const valores = req.body;

        modelAparelhos.altera(id, valores, res);
    });

    app.delete('/aparelhos/:id', (req, res)=>{
        const id = parseInt(req.params.id);

        modelAparelhos.deleta(id, res);
    });

    
};