import Endereco from '../models/Endereco';

class EnderecoController {
  async store(req, res) {
    const endereco = await Endereco.create(req.body);
    return res.json(endereco);
  }

  async index(req, res) {
    const enderecos = await Endereco.findAll();

    return res.json(enderecos);
  }

  async show(req, res) {
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
