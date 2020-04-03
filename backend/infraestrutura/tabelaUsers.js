   class tabelaUsers {
      init(conexao) {
         this.conexao = conexao;
         this.createUsers()
     }

       createUsers(){
           const sql = "CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, nome varchar(11) NOT NULL, sobrenome varchar(11) NOT NULL, dataNasc varchar(10)  NOT NULL, rua varchar(20) NOT NULL, numero varchar(5) NOT NULL, bairro varchar(20) NOT NULL, cidade varchar(20) NOT NULL, uf char(2) NOT NULL, telefone varchar(11) NOT NULL, celular varchar(11) NOT NULL, cpf char(11) NOT NULL, email varchar(50) NOT NULL, password varchar(10) NOT NULL)";
           
           this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('empresa cadastrada')
            }
            })
         }
     };

     module.exports = new tabelaUsers;