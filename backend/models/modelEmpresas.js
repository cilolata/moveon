const conexao = require('../infraestrutura/conexao');


class modelEmpresas {
    adiciona(empresa, res){
        const razaoSocialValida = empresa.razaoSocial.length > '';
        const cnpjValido = empresa.cnpj.length === 14;
        const numeroValido = empresa.numero.length > '';
        const bairroValido = empresa.bairro.length >= 3;
        const cidadeValida = empresa.cidade.length >= 3;
        const ufValido = empresa.uf.length === 2;
        const telefoneValido = empresa.telefone_comercial.length > '' ;
        const celularValido = empresa.celular.length > '';
        const email = empresa.email.length > '';
        const password = empresa.password.length > 3;


        const validacao = [
            {
                nome: 'razaoSocial',
                valido: razaoSocialValida,
                mensagem: 'é necessáro informar a razão social'
            },

            {
                nome: 'cnpj',
                valido: cnpjValido,
                mensagem: 'cnpj deve ter 14 números sem ponto e barra'
            },
            {
                nome: 'numero',
                valido: numeroValido,
                mensagem: 'é necessáro informar o numero'
            },
            {
                nome: 'bairro',
                valido: bairroValido,
                mensagem: 'é necessáro informar o bairro'
            },
            {
                nome: 'cidade',
                valido: cidadeValida,
                mensagem: 'é necessáro informar a cidade'
            },
            {
                nome: 'uf',
                valido: ufValido,
                mensagem: 'é necessáro informar o estado'
            },
            {
                nome: 'telefone_comercial',
                valido: telefoneValido,
                mensagem: 'é necessáro informar um numero telefone comercial'
            },
            {
                nome: 'celular',
                valido: celularValido,
                mensagem: 'é necessáro informar um numero de celular'
            },
            {
                nome: 'email',
                valido: email,
                mensagem: 'é necessáro informar um  de email'
            },
            {
                nome: 'password',
                valido: password,
                mensagem: 'é necessáro informar uma senha com letras e numeros'
            }
        ];

        const erros = validacao.filter(campo => !campo.valido);
        const existemErros = erros.length;
       
        if(existemErros){
            res.status(400).json(erros)
        }else{
            const sql = 'INSERT INTO empresas SET ?';
    
            conexao.query(sql, empresa, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro);
    
                }else{
                    res.status(201).json(empresa);
                }
            })
        }

    };

    lista(res){
        const sql = 'SELECT * FROM empresas';

        conexao.query(sql, (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados);
            }
        })
    };

    buscaPorId(id, res){
        const sql = `SELECT * FROM empresas WHERE id=${id}`;

        conexao.query(sql, (erro, resultados)=>{
            const empresa = resultados[0];

            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(empresa);
            }
        })
    }

    altera(id, valores, res){
        const sql = 'UPDATE empresas SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (erro, resultados)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({...valores, id});
            }
        })
    };

    deleta(id, res){
        const sql = 'DELETE FROM empresas WHERE id=?';

        conexao.query(sql, id, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json({id});
            }
        })
    };


};

module.exports = new modelEmpresas;