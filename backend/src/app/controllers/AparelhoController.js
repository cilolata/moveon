import * as Yup from 'yup';
import Aparelho from '../models/Aparelho';
import File from '../models/File';
import Empresa from '../models/Empresa';

class AparelhoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      descricao: Yup.string().required(),
      peso: Yup.string().required(),
      quantidade: Yup.string().required(),
      valor_diaria: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao validar dados.' });
    }

    const {
      nome,
      descricao,
      peso,
      quantidade,
      valor_diaria,
      file_id,
    } = req.body;

    const { id } = await Empresa.findOne({
      where: { id: req.userId },
    });

    const aparelho = await Aparelho.create({
      nome,
      descricao,
      peso,
      quantidade,
      valor_diaria,
      file_id,
      empresa_id: id,
    });

    return res.json(aparelho);
  }

  async index(req, res) {
    const aparelho = await Aparelho.findAll({
      include: [
        {
          model: File,
          as: 'foto',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Empresa,
          as: 'empresa',
          attributes: ['id', 'nome_fantasia', 'razao_social'],
        },
      ],
    });

    return res.json(aparelho);
  }

  async show(req, res) {
    const { id } = req.params;

    const aparelho = await Aparelho.findOne({
      where: {
        id,
      },
      attributes: ['nome', 'descricao', 'peso', 'quantidade', 'valor_diaria'],
      include: [
        {
          model: File,
          as: 'foto',
          attributes: ['nome', 'path', 'url'],
        },
        {
          model: Empresa,
          as: 'empresa',
          attributes: ['id', 'nome_fantasia', 'razao_social'],
        },
      ],
    });

    return res.json(aparelho);
  }

  async update(req, res) {
    const { id } = req.params;

    const aparelho = await Aparelho.findByPk(id);

    await aparelho.update(req.body);

    return res.json(aparelho);
  }

  async delete(req, res) {
    const { id } = req.params;

    const aparelho = await Aparelho.findByPk(id);

    await aparelho.destroy();

    return res.send();
  }
}

export default new AparelhoController();
