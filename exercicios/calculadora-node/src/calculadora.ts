function somar(num1: number, num2: number): number {
  return num1 + num2;
}

function subtrair(num1: number, num2: number): number {
  return num1 - num2;
}

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

function dividir(num1: number, num2: number): number {
  if (num2 === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }
  return num1 / num2;
}

function aoQuadrado(num1: number): number {
  return Math.pow(num1, 2);
}

function raizQuadrada(num1: number): number {
  if (num1 < 0) {
    throw new Error(
      "Não é possível calcular a raiz quadrada de um número negativo."
    );
  }
  return Math.sqrt(num1);
}

export { somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada };
