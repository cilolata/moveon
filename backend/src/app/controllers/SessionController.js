import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Empresa from '../models/Empresa';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha ao validar dados' });
    }

    const { email, password } = req.body;

    const empresa = await Empresa.findOne({
      where: { email },
    });

    if (!empresa) {
      return res.status(401).json({ error: 'Empresa não encontrada.' });
    }

    if (!(await empresa.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha incorreta!' });
    }

    const { id, name } = empresa;

    return res.json({
      empres: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expireIn,
      }),
    });
  }
}

export default new SessionController();
