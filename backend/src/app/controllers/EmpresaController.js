import Empresa from '../models/Empresa';

class EmpresaController {
  async store(req, res) {
    const empresaExists = await Empresa.findOne({
      where: { email: req.body.email },
    });

    if (empresaExists) {
      return res.status(400).json({ error: 'Empresa já existe.' });
    }

    const empresa = await Empresa.create(req.body);

    return res.json(empresa);
  }
}

export default new EmpresaController();
