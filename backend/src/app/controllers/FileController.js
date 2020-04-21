import File from '../models/File'

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
    const file = await File.findByPk(req.params.id);

    return res.json(file);
  }

  //  async update(req, res) {
  //    const file = await File.findByPk(req.params.id);

  //    await file.update(req.body);

  //    return res.json(file);
  //  }

   async delete(req, res) {
     const file = await File.findByPk(req.params.id);

     await file.destroy();

     return res.send();
   }
}

export default new FileController();
