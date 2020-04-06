import Empresa from '../models/Empresa';

class EmpresaController {
  async index(req, res) {
    const empresas = await Empresa.findAll();
    return res.json(empresas);
  }

  async show(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findOne({
      where: {
        id,
      },
    });

    return res.json(empresa);
  }

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

  async update(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findByPk(id);

    await empresa.update(req.body);

    return res.json(empresa);
  }

  async delete(req, res) {
    const { id } = req.params;

    const empresa = await Empresa.findByPk(id);

    await empresa.destroy();

    return res.send();
  }
}

export default new EmpresaController();
