class TabelaEmpresas {
    init(conexao) {
        this.conexao = conexao;
        this.createEmpresas()
    }

    createEmpresas(){
        const sql = "CREATE TABLE IF NOT EXISTS empresas (id INT AUTO_INCREMENT PRIMARY KEY, nomeFantasia varchar(50), razaoSocial varchar(50) NOT NULL,cnpj char(14) NOT NULL, rua varchar(50) NOT NULL, numero varchar(6) NOT NULL, bairro varchar(20) NOT NULL,cidade varchar(20) NOT NULL, uf char(2) NOT NULL, telefone_comercial varchar(20) NOT NULL, celular varchar(20) NOT NULL, dataCadastro datetime DEFAULT CURRENT_TIMESTAMP, cadastroAtivo varchar(3) NOT NULL, email varchar(50) NOT NULL, password varchar(10) NOT NULL)";
       
        this.conexao.query(sql, (erro) =>{
            if(erro){
                console.log(erro)
            }else{
                console.log('empresa cadastrada')
            }
        })
    }
 
}


module.exports = new TabelaEmpresas;