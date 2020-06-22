import * as Yup from 'yup';
import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: nome, filename: path } = req.file;

    const file = await File.create({
      nome,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    const file = await File.findAll();

    return res.json(file);
  }

  async show(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().email().required(),
    });

    if (!(await schema.isValid(req.params))) {
      return res.status(400).json({ error: 'Id inválido' });
    }

    const file = await File.findByPk(req.params.id);

    return res.json(file);
  }

  async update(req, res) {
    // const schema = Yup.object().shape({
    //   id: Yup.number().required(),
    // });
    // if (!(await schema.isValid(req.params))) {
    //   return res.status(400).json({ error: 'Id inválido' });
    // }
    // const file = await File.findByPk(req.params.id);
    // console.log(file);
    // const { originalname: nome, filename: path } = req.file;
    // await file.update({
    //   nome,
    //   path,
    // });
    // return res.json(file);
  }

  async delete(req, res) {
    const file = await File.findByPk(req.params.id);

    await file.destroy();

    return res.send();
  }
}

export default new FileController();
