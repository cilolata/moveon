import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import Empresa from '../models/Empresa';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const empresa = await Empresa.findOne({
      where: { email: req.body.email },
    });

    if (empresa) {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Falha ao validar dados' });
      }

      const { email, password } = req.body;

      if (!empresa) {
        return res.status(401).json({ error: 'Empresa não encontrada.' });
      }

      if (!(await empresa.checkPassword(password))) {
        return res.status(401).json({ error: 'Senha incorreta!' });
      }

      const { id, name } = empresa;

      return res.json({
        empresa: {
          id,
          name,
          email,
        },
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expireIn,
        }),
      });
    }

    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (user) {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Falha ao validar dados' });
      }

      const { email, password } = req.body;

      if (!user) {
        return res.status(401).json({ error: 'Usuario não encontrada.' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Senha incorreta!' });
      }

      const { id, name } = user;

      return res.json({
        user: {
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
}

export default new SessionController();
