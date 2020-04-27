import User from '../models/User';
import Endereco from '../models/Endereco';

class UserController {
  async index(req, res) {
    const users = await User
      .findAll
      //   {
      //   include: [
      //     {
      //       model: Endereco,
      //       as: 'endereco',
      //       attributes: [
      //         'rua',
      //         'numero',
      //         'bairro',
      //         'cidade',
      //         'estado',
      //         'uf',
      //         'telefone',
      //         'celular',
      //       ],
      //     },
      //   ],
      // }
      ();
    return res.json(users);
  }

  async show(req, res) {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
      },
      attributes: ['nome', 'sobrenome', 'data_nascimento', 'cpf', 'email'],
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
    return res.json(user);
  }

  async store(req, res) {
    // const emailExists = await User.findOne({
    //   where: { email: req.body.email },
    // });

    // if (emailExists) {
    //   return res.status(400).json({ error: 'E-mail já existe.' });
    // }

    const user = await User.create(req.body);

    return res.json(user);
  }

  async update(req, res) {
    const user = await User.findByPk(req.params.id);

    await user.update(req.body);

    return res.json(user);
  }

  async delete(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    await user.destroy();

    return res.send();
  }
}

export default new UserController();
