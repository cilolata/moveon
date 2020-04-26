import Cliente from '../models/Cliente';
import User from  '../models/User';

class ClienteController {
  async store(req, res) {
    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  }

  async index(req, res) {
    const cliente = await Cliente.findAll({
      include: [
        {
          model: User,
          as: 'userCliente',
          attributes: [
            'id',
            'email'
          ],
        },
      ],
    });

    return res.json(cliente);
  }
}

export default new ClienteController();
