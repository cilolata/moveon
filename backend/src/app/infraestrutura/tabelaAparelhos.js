// class TabelaAparelhos {
//   init(conexao) {
//     this.conexao = conexao;
//     this.createAparelhos();
//   }

//   createAparelhos() {
//     const sql =
//       'CREATE TABLE IF NOT EXISTS aparelhos (id INT AUTO_INCREMENT PRIMARY KEY, nome varchar(50) NOT NULL, descricao varchar(1000), valorDiaria varchar(10) NOT NULL, peso varchar(4), caminho_foto varchar(200), CONSTRAINT fk_empresas FOREIGN KEY (Id) REFERENCES empresas(id), empresaProprietariaId int)';

//     this.conexao.query(sql, (erro) => {
//       if (erro) {
//         console.log(erro);
//       } else {
//         console.log('aparelho cadastrado');
//       }
//     });
//   }
// }

// export default new TabelaAparelhos();
