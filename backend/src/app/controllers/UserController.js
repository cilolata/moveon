import { parseISO } from 'date-fns';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const { nome, sobrenome, cpf, email, password_hash } = req.body;

    const date = parseISO(req.body.data_nascimento);

    const user = await User.create({
      nome,
      sobrenome,
      data_nascimento: date,
      cpf,
      email,
      password_hash,
    });
    return res.json(user);
  }
}

export default new UserController();
