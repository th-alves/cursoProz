//Nesta função, num1 e num2 são os números para a operação, e operacao é o número que define a operação a ser executada. A função usa uma instrução switch para determinar qual operação realizar com base no valor de operacao. Se operacao for um número que não corresponde a nenhuma das operações definidas (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão), a função retorna 0.

function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    default:
      return 0;
  }
}

let resultado = calculadora(5, 3, 1); //Foram passados os valores da função: 5 e 3 como números, e 1 para indicar qual tipo de cálculo eu quero realizar, nesse caso é a soma.
console.log(resultado);
