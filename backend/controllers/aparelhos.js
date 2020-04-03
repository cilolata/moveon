const modelAparelhos = require('../models/modelAparelhos');


module.exports = app => {
   
    app.post('/aparelhos', (req, res) => {
        const aparelho = req.body;

        modelAparelhos.adiciona(aparelho, res);
    });

    
}