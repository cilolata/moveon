import Cliente from '../models/Cliente';

class ClienteController {
  async store(req, res) {
    const cliente = await Cliente.create(req.body);
    return res.json(cliente)
  }
}

export default new ClienteController();
