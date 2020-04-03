const conexao = require('../infraestrutura/conexao');

class modelAparelhos {
    adiciona(aparelho, res){
        
        const sql = 'INSERT INTO aparelhos SET ?';
    
        conexao.query(sql, aparelho, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro);

            }else{
                res.status(201).json(aparelho);
            }
        })
    }


};

module.exports = new modelAparelhos;
