const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const tabelaEmpresas = require('./infraestrutura/tabelaEmpresas');
const tabelaUsers = require('./infraestrutura/tabelaUsers');
const tabelaAparelhos = require('./infraestrutura/tabelaAparelhos');



conexao.connect( erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log("conectado");
        const app = customExpress();
        tabelaEmpresas.init(conexao);
        tabelaUsers.init(conexao);
        tabelaAparelhos.init(conexao);
        app.listen(3333);
    }
});
