function calculadoraInterativa() {
  let operacao;
  do {
    console.log("1: Soma");
    console.log("2: Subtração");
    console.log("3: Multiplicação");
    console.log("4: Divisão");
    console.log("0: Sair");
    operacao = Number(
      prompt("Digite o número para a operação correspondente:")
    );

    if (operacao < 0 || operacao > 4 || isNaN(operacao)) {
      console.log("Essa opção não existe");
      continue;
    }

    if (operacao === 0) {
      break;
    }

    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let resultado;

    switch (operacao) {
      case 1:
        resultado = num1 + num2;
        break;
      case 2:
        resultado = num1 - num2;
        break;
      case 3:
        resultado = num1 * num2;
        break;
      case 4:
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          console.log("Erro: Divisão por zero não é permitida.");
          continue;
        }
        break;
    }
    
    console.log("O resultado é: " + resultado);
  } while (operacao !== 0);
}

