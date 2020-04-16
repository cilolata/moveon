import Aparelho from '../models/Aparelho';
import File from '../models/File';

class AparelhoController {
  async index(req, res) {
    const aparelho = await Aparelho.findAll({
      include: [
        {
          model: File,
          as: 'foto',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(aparelho);
  }

  // async show(req, res) {
  //   const { id } = req.params;

  //   const aparelho= await Aparelho.findOne({
  //     where: {
  //       id,
  //     },
  //     attributes: [
  //       'nome',
  //       'descricao',
  //       'peso',
  //      ' quantidade',
  //       'valor_diaria'
  //     ],
  //     include: [
  //       {
  //         model: File,
  //         as: 'file',
  //         attributes: [

  //         ],
  //       },
  //     ],
  //   });

  //   return res.json(empresa);
  // }

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
}

export default new AparelhoController();