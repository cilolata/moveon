import * as Yup from 'yup';
import User from '../models/User';
import Cliente from '../models/Cliente';
import Endereco from '../models/Endereco';

class UserController {
  async show(req, res) {
    const user = await User.findOne({
      where: {
        id: req.userId,
      },
      attributes: ['email'],
      include: [
        {
          model: Cliente,
          as: 'cliente',
          attributes: ['nome', 'sobrenome', 'data_nascimento', 'cpf'],
        },
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
    return res.json(user);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao validar dados!' });
    }

    const emailExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (emailExists) {
      return res.status(400).json({ error: 'E-mail já existe.' });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Falha ao validar dados.' });
    }

    const user = await User.findByPk(req.userId);

    await user.update(req.body);

    return res.json(user);
  }

  async delete(req, res) {
    const user = await User.findOne({
      where: { id: req.userId },
      include: {
        model: Endereco,
        as: 'endereco',
      },
    });

    if (!user) {
      return res
        .status(401)
        .json({ error: 'Você não tem permissão para deletar' });
    }

    await user.destroy();

    return res.send();
  }
}

export default new UserController();
