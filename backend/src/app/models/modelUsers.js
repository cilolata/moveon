import { query } from '../infraestrutura/conexao';

class ModelUsers {
  adiciona(user, res) {
    const nome = user.nome.length >= 3;
    const sobrenome = user.sobrenome.length >= 3;
    const dataNasc = user.dataNasc.length === 10;
    const rua = user.rua.length >= 3;
    const numero = user.numero.length >= 1;
    const bairro = user.bairro.length >= 3;
    const cidade = user.cidade.length >= 3;
    const uf = user.uf.length === 2;
    const telefone = user.telefone.length > '';
    const celular = user.celular.length > '';
    const cpf = user.cpf.length === 11;
    const email = user.email.length > '';
    const password = user.password.length > 3;

    const validacao = [
      {
        nome: 'nome',
        valido: nome,
        mensagem: 'é necessáro informar um nome válido',
      },

      {
        nome: 'sobrenome',
        valido: sobrenome,
        mensagem: 'é necessário informar um sobrenome válido',
      },
      {
        nome: 'dataNasc',
        valido: dataNasc,
        mensagem: 'é necessáro informar a data de nascimento 00/00/0000',
      },
      {
        nome: 'rua',
        valido: rua,
        mensagem: 'é necessáro informar a rua',
      },
      {
        nome: 'numero',
        valido: numero,
        mensagem: 'é necessáro informar o numero',
      },
      {
        nome: 'bairro',
        valido: bairro,
        mensagem: 'é necessáro informar o bairro',
      },
      {
        nome: 'cidade',
        valido: cidade,
        mensagem: 'é necessáro informar a cidade',
      },
      {
        nome: 'uf',
        valido: uf,
        mensagem: 'é necessáro informar o estado',
      },
      {
        nome: 'telefone',
        valido: telefone,
        mensagem: 'é necessáro informar um numero telefone comercial',
      },
      {
        nome: 'celular',
        valido: celular,
        mensagem: 'é necessáro informar um numero de celular',
      },
      {
        nome: 'cpf',
        valido: cpf,
        mensagem: 'é necessáro informar um numero de cpf',
      },
      {
        nome: 'email',
        valido: email,
        mensagem: 'é necessáro informar um  de email',
      },
      {
        nome: 'password',
        valido: password,
        mensagem: 'é necessáro informar uma senha com letras e numeros',
      },
    ];

    const erros = validacao.filter((campo) => !campo.valido);
    const existemErros = erros.length;

    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const sql = 'INSERT INTO users SET ?';

      query(sql, empresa, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(201).json(user);
        }
      });
    }
  }

  lista(res) {
    const sql = 'SELECT * FROM users';

    query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM users WHERE id=${id}`;

    query(sql, (erro, resultados) => {
      const user = resultados[0];

      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(user);
      }
    });
  }

  altera(id, valores, res) {
    const sql = 'UPDATE users SET ? WHERE id=?';

    query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }

  deleta(id, res) {
    const sql = 'DELETE FROM users WHERE id=?';

    query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

export default new ModelUsers();
