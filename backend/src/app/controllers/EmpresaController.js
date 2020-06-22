import * as Yup from 'yup';
import Empresa from '../models/Empresa';
import User from '../models/User';
import Endereco from '../models/Endereco';

class EmpresaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome_fantasia: Yup.string().required(),
      razao_social: Yup.string().required(),
      cnpj: Yup.string().required().min(14),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao validar dados.' });
    }

    const { nome_fantasia, razao_social, cnpj } = req.body;

    const user_id = req.userId;

    const empresaExists = await Empresa.findOne({
      where: { user_id },
    });

    if (empresaExists) {
      return res.status(400).json({ error: 'Empresa já existe.' });
    }

    const empresa = await Empresa.create({
      nome_fantasia,
      razao_social,
      cnpj,
      user_id,
    });

    return res.json(empresa);
  }

  async index(req, res) {
    const empresas = await Empresa.findAll({
      attributes: ['id', 'nome_fantasia', 'razao_social', 'cnpj', 'status'],
      include: [
        {
          model: User,
          as: 'empresa',
          attributes: ['email'],
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
        },
      ],
    });
    return res.json(empresas);
  }

  async show(req, res) {
    const empresa = await Empresa.findOne({
      where: {
        user_id: req.userId,
      },
      attributes: ['id', 'nome_fantasia', 'razao_social', 'cnpj', 'status'],
      include: [
        {
          model: User,
          as: 'empresa',
          attributes: ['email'],
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
        },
      ],
    });

    if (!empresa) {
      return res.status(401).json({ error: 'Id Invalido' });
    }

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
