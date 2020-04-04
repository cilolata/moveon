class EmpresaController {
  async store(req, res) {
    console.log(req.body);
    return res.json(req.body);
  }
}

export default new EmpresaController();
