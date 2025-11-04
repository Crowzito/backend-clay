const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
});

const DespartamentoModel = mongoose.model(`Departamentos`, schema);

module.export = { DespartamentoModel };
