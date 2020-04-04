import { query } from '../infraestrutura/conexao';

class ModelAparelhos {
  constructor() {
    return '';
  }

  adiciona(aparelho, res) {
    const sql = 'INSERT INTO aparelhos SET ?';

    query(sql, aparelho, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(201).json(aparelho);
      }
    });
  }

  lista(res) {
    const sql = 'SELECT * FROM aparelhos';

    query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(resultados);
      }
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM aparelhos WHERE id=${id}`;

    query(sql, (erro, resultados) => {
      const aparelho = resultados[0];

      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(aparelho);
      }
    });
  }

  altera(id, valores, res) {
    const sql = 'UPDATE aparelhos SET ? WHERE id=?';

    query(sql, [valores, id], (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ ...valores, id });
      }
    });
  }

  deleta(id, res) {
    const sql = 'DELETE FROM aparelhos WHERE id=?';

    query(sql, id, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json({ id });
      }
    });
  }
}

export default ModelAparelhos;
