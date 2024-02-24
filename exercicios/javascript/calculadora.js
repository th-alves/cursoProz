function calculadora(num1, num2, operacao) {
  if (operacao === 1) {
    return num1 + num2;
  } else if (operacao === 2) {
    return num1 - num2;
  } else if (operacao === 3) {
    return num1 * num2;
  } else if (operacao === 4) {
    return num1 / num2;
  } else {
    return 0;
  }
}

let resultado = calculadora(5, 3, 1); //Foram passados os valores da função: 5 e 3 como números, e 1 para indicar qual tipo de cálculo eu quero realizar, nesse caso é a soma.
console.log(resultado);
