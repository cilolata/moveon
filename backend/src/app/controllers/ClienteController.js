import * as Yup from 'yup';
import Cliente from '../models/Cliente';
import User from '../models/User';

class ClienteController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      sobrenome: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      cpf: Yup.string().required().min(11),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao validar dados.' });
    }

    const { nome, sobrenome, data_nascimento, cpf } = req.body;

    const user_id = req.userId;

    const clienteExists = await Cliente.findOne({
      where: {
        user_id,
      },
    });

    if (clienteExists) {
      return res.status(401).json({ error: 'Cliente já existe' });
    }

    const cliente = await Cliente.create({
      nome,
      sobrenome,
      data_nascimento,
      cpf,
      user_id,
    });

    return res.json(cliente);
  }

  async index(req, res) {
    const cliente = await Cliente.findAll({
      include: [
        {
          model: User,
          as: 'cliente',
          attributes: ['id', 'email'],
          include: [
            {
              model: Cliente,
              as: 'userCliente',
            },
          ],
        },
      ],
    });

    return res.json(cliente);
  }
}

export default new ClienteController();
