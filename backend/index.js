import customExpress from './config/customExpress';
import conexao from './infraestrutura/conexao';
import tabelaEmpresas from './infraestrutura/tabelaEmpresas';
import tabelaUsers from './infraestrutura/tabelaUsers';
import tabelaAparelhos from './infraestrutura/tabelaAparelhos';

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log('conectado');
    const app = customExpress();
    tabelaEmpresas(conexao);
    tabelaUsers(conexao);
    tabelaAparelhos(conexao);
    app.listen(3333);
  }
});
