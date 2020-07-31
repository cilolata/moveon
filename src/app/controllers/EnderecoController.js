import * as Yup from 'yup';
import Endereco from '../models/Endereco';

class EnderecoController {
  async store(req, res) {
    const schema = Yup.object().shape({
      rua: Yup.string().required(),
      numero: Yup.string().required().min(1),
      bairro: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      uf: Yup.string().required().required().max(2),
      cep: Yup.string().required().min(8),
      telefone: Yup.string().required().min(10),
      celular: Yup.string().required().min(11),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao validar dados.' });
    }

    const {
      rua,
      numero,
      bairro,
      cidade,
      estado,
      uf,
      cep,
      telefone,
      celular,
    } = req.body;

    const user_id = req.userId;

    const endereco = await Endereco.create({
      rua,
      numero,
      bairro,
      cidade,
      estado,
      uf,
      cep,
      telefone,
      celular,
      user_id,
    });

    return res.json(endereco);
  }

  async index(req, res) {
    const enderecos = await Endereco.findAll();

    return res.json(enderecos);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Id inválido' });
    }

    const endereco = await Endereco.findByPk(req.params.id);

    return res.json(endereco);
  }

  async update(req, res) {
    const endereco = await Endereco.findByPk(req.params.id);

    await endereco.update(req.body);

    return res.json(endereco);
  }

  async delete(req, res) {
    const endereco = await Endereco.findByPk(req.params.id);

    await endereco.destroy();

    return res.send();
  }
}

export default new EnderecoController();
