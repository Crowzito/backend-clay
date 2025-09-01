// import cod test

import * as cal from "./calculadora";

// importo as funcionalidades do jest
import { describe, expect, test } from "@jest/globals";

// describe para fazer o agrupamento dos testes
describe("Testando Módulo Calculadora", () => {
  // construcao dos testes unitarios
  test("calcular soma: 3 + 11 = 14", () => {
    expect(cal.somar(3, 11)).toBe(14);
  });
  test("calcular subtracao: 10 - 5 = 5", () => {
    expect(cal.subtrair(10, 5)).toBe(5);
  });
  test("calcular multiplicacao: 5 * 10 = 50", () => {
    expect(cal.multiplicar(5, 10)).toBe(50);
  });
  test("calcualr divisao: 30 / 6 = 5", () => {
    expect(cal.dividir(30, 6)).toBe(5);
  });
  test("calcular potenciacao: 5 ** 2 = 25", () => {
    expect(cal.aoQuadrado(5)).toBe(25);
  });
  test("calcular raiz quadrada: 112 por volta de 10.5", () => {
    expect(cal.raizQuadrada(112)).toBeCloseTo(10.58);
  });
});
