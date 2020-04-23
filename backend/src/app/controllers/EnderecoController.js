import Endereco from '../models/Endereco';
import Empresa from '../models/Empresa';

class EnderecoController {
  async store(req, res) {
    const empresa = await Empresa.findByPk(req.userLog);
    console.log(empresa);
    if (empresa) {
      const endereco = await Endereco.create(req.body);
      await endereco.update({
        empresa_id: req.userLog,
      });
      return res.json(endereco);
    }
    const endereco = await Endereco.create(req.body);
    await endereco.update({
      user_id: req.userLog,
    });
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
