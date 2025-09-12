const express = require("express");

const router = express.Router();

router.get("/calculadora/somar", (req, res, next) => {
  const valor1 = parseFloat(req.query.valor1);
  const valor2 = parseFloat(req.query.valor2);

  if (isNaN(valor1) || isNaN(valor2)) {
    return res.status(400).json({ erro: "Preencha os campos corretamente!" });
  }

  if (valor1 < 0 || valor2 < 0) {
    return res.status(400).json({ erro: "O número deve ser maior que zero!" });
  }

  const resultado = valor1 + valor2;

  res.json({ resultado: resultado });
});

router.get("/calculadora/subtrair", (req, res, next) => {
  const valor1 = parseFloat(req.query.valor1);
  const valor2 = parseFloat(req.query.valor2);

  if (isNaN(valor1) || isNaN(valor2)) {
    return res.status(400).json({ erro: "Preencha os campos corretamente!" });
  }

  if (valor1 < 0 || valor2 < 0) {
    return res.status(400).json({ erro: "O número deve ser maior que zero!" });
  }

  const resultado = valor1 - valor2;

  res.json({ resultado: resultado });
});

router.get("/calculadora/multiplicar", (req, res, next) => {
  const valor1 = parseFloat(req.query.valor1);
  const valor2 = parseFloat(req.query.valor2);

  if (isNaN(valor1) || isNaN(valor2)) {
    return res.status(400).json({ erro: "Preencha os campos corretamente!" });
  }

  if (valor1 < 0 || valor2 < 0) {
    return res.status(400).json({ erro: "O número deve ser maior que zero!" });
  }

  const resultado = valor1 * valor2;

  res.json({ resultado: resultado });
});

router.get("/calculadora/dividir", (req, res, next) => {
  const valor1 = parseFloat(req.query.valor1);
  const valor2 = parseFloat(req.query.valor2);

  if (isNaN(valor1) || isNaN(valor2)) {
    return res.status(400).json({ erro: "Preencha os campos corretamente!" });
  }

  if (valor1 < 0 || valor2 < 0) {
    return res.status(400).json({ erro: "O número deve ser maior que zero!" });
  }

  const resultado = valor1 / valor2;

  res.json({ resultado: resultado });
});

router.get("/calculadora/aoQuadrado", (req, res, next) => {
  const valor1 = parseFloat(req.query.valor1);

  if (isNaN(valor1)) {
    return res.status(400).json({ erro: "Preencha os campos corretamente!" });
  }

  if (valor1 < 0) {
    return res.status(400).json({ erro: "O número deve ser maior que zero!" });
  }

  const resultado = valor1 ** 2;

  res.json({ resultado: resultado });
});

router.get("/calculadora/raizQuadrada", (req, res, next) => {
  const valor1 = parseFloat(req.query.valor1);

  if (isNaN(valor1)) {
    return res.status(400).json({ erro: "Preencha os campos corretamente!" });
  }

  if (valor1 < 0) {
    return res.status(400).json({ erro: "O número deve ser maior que zero!" });
  }

  const resultado = Math.sqrt(valor1);

  res.json({ resultado: resultado });
});

module.exports = router;
