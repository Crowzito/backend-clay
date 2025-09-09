const express = require("express");

const router = express.Router();

router.get("/calculadora/notaA1", (req, res, next) => {
  const exercicio = parseFloat(req.query.exercicio);
  const trabalho = parseFloat(req.query.trabalho);
  const prova = parseFloat(req.query.prova);

  if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
    return res.status(400).json({ erro: "Preencha os campos obrigatórios!" });
  }

  if (
    exercicio < 0 ||
    exercicio > 1 ||
    trabalho < 0 ||
    trabalho > 3 ||
    prova < 0 ||
    prova > 6
  ) {
    return res.status(400).json({ erro: "Notas fora do intervalo!" });
  }

  const notaA1 = (exercicio + trabalho + prova) * 0.4;

  res.json({ notaA1: notaA1 });
});

router.get("/calculadora/notaA2", (req, res, next) => {
  const exercicio = parseFloat(req.query.exercicio);
  const trabalho = parseFloat(req.query.trabalho);
  const prova = parseFloat(req.query.prova);

  if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
    return res.status(400).json({ erro: "Preencha os campos obrigatórios!" });
  }

  if (
    exercicio < 0 ||
    exercicio > 1 ||
    trabalho < 0 ||
    trabalho > 3 ||
    prova < 0 ||
    prova > 6
  ) {
    return res.status(400).json({ erro: "Notas fora do intervalo!" });
  }

  const notaA2 = (exercicio + trabalho + prova) * 0.6;

  res.json({ notaA2: notaA2 });
});

router.get("calculadora/media", (req, res, next) => {
  const notaA1 = parseFloat(req.query.notaA1);
  const notaA2 = parseFloat(req.query.notaA2);

  if (isNaN(notaA1) || isNaN(notaA2)) {
    return res.status(400).json({ erro: "Notas Inválidas!" });
  }

  if (notaA1 < 0 || notaA1 > 4 || notaA2 < 0 || notaA2 > 6) {
    return res.status(400).json({ erro: "Notas fora do intervadlo!" });
  }

  const media = notaA1 + notaA2;

  res.json({ media: media });
});

module.exports = router;
