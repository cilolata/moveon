const modelUsers = require('../models/modelUsers');

 module.exports = app => {

    app.get('/users', (req, res) => {
        modelUsers.lista(res);
    });

    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id);

        modelUsers.buscaPorId(id, res);
    });

     app.post('/users', (req, res) => {
         const user = req.body;

         modelUsers.adiciona(user, res);
     });

     app.put('/users/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        const valores = req.body;

        modelUsers.altera(id, valores, res);
    });

    app.delete('/users/:id', (req, res)=>{
        const id = parseInt(req.params.id);

        modelUsers.deleta(id, res);
    });

    
};