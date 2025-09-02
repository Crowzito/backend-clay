import express, { Request, Response, NextFunction } from "express";

// A forma correta de inicializar o express é chamando a função
// que é exportada como 'default' do pacote.
const app = express();
const port = 3000;

// Em uma rota, você deve sempre enviar uma resposta para o cliente.
// Se você apenas chamar next(), a requisição ficará "presa" esperando
// uma resposta que nunca chegará.
app.get("/", (req: Request, res: Response) => {
  res.send(
    "<h1>Bem-vindo à minha aplicação!</h1><p>A rota principal está funcionando.</p>"
  );
});

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello WorlD!!!!");
});

app.get("/pessoas", (req: Request, res: Response) => {
  const pessoas = [
    {
      id: 1,
      nome: "jorge",
    },
    { id: 2, nome: "renan" },
  ];
  // É crucial enviar uma resposta, senão o navegador ficará carregando para sempre.
  res.json(pessoas);
});

app.listen(port, () => {
  console.log(`Servidor rodando com sucesso em http://localhost:${port}`);
});
