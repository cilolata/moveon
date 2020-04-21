import Empresa from '../models/Empresa';
import Endereco from '../models/Endereco';
import Aparelho from '../models/Aparelho';

class EmpresaController {
  async index(req, res) {
    const empresas = await Empresa.findAll({
      include: [
        {
          model: Aparelho,
          as: 'aparelho',
          attributes: [
            'id',
            'nome',
            'descricao',
            'peso',
            'quantidade',
            'valor_diaria'
          ],
        },
      ],
    });
    return res.json(empresas);
  }

  async show(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findOne({
      where: {
        id,
      },
      attributes: [
        'id',
        'nome_fantasia',
        'razao_social',
        'cnpj',
        'email',
        'status',
      ],
      include: [
        {
          model: Endereco,
          as: 'endereco',
          attributes: [
            'rua',
            'numero',
            'bairro',
            'cidade',
            'estado',
            'uf',
            'telefone',
            'celular',
          ],
        },
      ],
    });

    return res.json(empresa);
  }

  async store(req, res) {
    const cnpjExists = await Empresa.findOne({
      where: { cnpj: req.body.cnpj },
    });

    if (cnpjExists) {
      return res.status(400).json({ error: 'CNPJ já existe.' });
    }

    const emailExists = await Empresa.findOne({
      where: { email: req.body.email },
    });

    if (emailExists) {
      return res.status(400).json({ error: 'E-mail já existe.' });
    }
    const empresa = await Empresa.create(req.body);

    return res.json(empresa);
  }

  async update(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findByPk(id);

    await empresa.update(req.body);

    return res.json(empresa);
  }

  async delete(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findByPk(id);

    await empresa.destroy();

    return res.send();
  }
}

export default new EmpresaController();
