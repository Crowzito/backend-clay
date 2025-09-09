const express = require("express");

const app = express();

// intermediario de LOG
app.use((req, res, next) => {
  console.log("###### Requisição Chegou ######");
  console.log("Time: ", new Date().toLocaleString());
  console.log("Metodo: ", req.method);
  console.log("Rota: ", req.url);
  next();
});

app.get("/hello", (req, res, next) => {
  res.send("Hello!!!!");
});

const calculadoraNotaRouter = require("./routes/CalculadoraNota");

app.use("/", calculadoraNotaRouter);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
