const modelEmpresas = require('../models/modelEmpresas');


module.exports = app => {
   
    app.get('/empresas', (req, res) => {
        modelEmpresas.lista(res);
    });

    app.get('/empresas/:id', (req, res) => {
        const id = parseInt(req.params.id);

        modelEmpresas.buscaPorId(id, res);
    });

    app.post('/empresas', (req, res) => {
        const empresa = req.body;

        modelEmpresas.adiciona(empresa, res);
    });

    app.put('/empresas/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        const valores = req.body;

        modelEmpresas.altera(id, valores, res);
    });

    app.delete('/empresas/:id', (req, res)=>{
        const id = parseInt(req.params.id);

        modelEmpresas.deleta(id, res);
    });

    
}