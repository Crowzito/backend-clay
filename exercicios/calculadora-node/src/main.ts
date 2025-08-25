import * as calc from "./calculadora";
import promptSync from "prompt-sync";

const prompt = promptSync();

function obterNumero(mensagem: string): number | null {
  const entrada = prompt(mensagem);

  if (entrada === null || entrada.trim() === "") {
    console.log("Entrada vazia. Por favor, digite um número válido.");
    return null;
  }

  const num = Number(entrada);

  if (isNaN(num)) {
    console.log("Entrada inválida. Por favor, digite um número válido.");
    return null;
  }

  return num;
}

while (true) {
  const escolha = prompt(
    `Selecione uma operação:
1 - Somar
2 - Subtrair
3 - Multiplicar
4 - Dividir
5 - Elevar ao Quadrado
6 - Raiz Quadrada
7 - Sair
Opção: `
  );

  const opcao = Number(escolha);

  if (isNaN(opcao) || opcao < 1 || opcao > 7) {
    console.log("Opção inválida. Por favor, escolha um número entre 1 e 7.");
    console.log("\n--------------------\n");
    continue;
  }

  if (opcao === 7) {
    console.log("Saindo da calculadora...");
    break;
  }

  try {
    if (opcao >= 1 && opcao <= 4) {
      const num1 = obterNumero("Digite o primeiro número: ");
      if (num1 === null) {
        console.log("\n--------------------\n");
        continue;
      }

      const num2 = obterNumero("Digite o segundo número: ");
      if (num2 === null) {
        console.log("\n--------------------\n");
        continue;
      }

      let resultado: number;

      switch (opcao) {
        case 1:
          resultado = calc.somar(num1, num2);
          console.log(`A soma de ${num1} e ${num2} é: ${resultado}`);
          break;
        case 2:
          resultado = calc.subtrair(num1, num2);
          console.log(`A subtração de ${num1} e ${num2} é: ${resultado}`);
          break;
        case 3:
          resultado = calc.multiplicar(num1, num2);
          console.log(`A multiplicação de ${num1} e ${num2} é: ${resultado}`);
          break;
        case 4:
          resultado = calc.dividir(num1, num2);
          console.log(`A divisão de ${num1} e ${num2} é: ${resultado}`);
          break;
      }
    } else if (opcao === 5 || opcao === 6) {
      const num = obterNumero("Digite o número: ");
      if (num === null) {
        console.log("\n--------------------\n");
        continue;
      }

      let resultado: number;

      switch (opcao) {
        case 5:
          resultado = calc.aoQuadrado(num);
          console.log(`${num} ao quadrado é: ${resultado}`);
          break;
        case 6:
          resultado = calc.raizQuadrada(num);
          console.log(`A raiz quadrada de ${num} é: ${resultado}`);
          break;
      }
    }

    console.log("\nCálculo finalizado.");
    break;
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Erro: ${error.message}`);
    } else {
      console.log("Ocorreu um erro inesperado.");
    }
  }

  console.log("\n--------------------\n");
}
