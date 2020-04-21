import Aparelho from '../models/Aparelho';
import File from '../models/File';
import Empresa from '../models/Empresa';

class AparelhoController {
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
        as: 'empresa'
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
          attributes: ['nome', 'path'],
        },
        {
          model: Empresa,
          as: 'empresa'
        },
      ],
    });

    return res.json(aparelho);
  }

  async store(req, res) {
    const aparelho = await Aparelho.create(req.body);

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
