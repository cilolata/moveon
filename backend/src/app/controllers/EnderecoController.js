import Endereco from '../models/Endereco';

class EnderecoController {
  async store(req, res) {
    console.log(req.body);
    const endereco = await Endereco.create(req.body);
    return res.json(endereco);
  }
}

export default new EnderecoController();
