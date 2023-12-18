let nomeCompleto = prompt("Digite seu nome completo:");
let anoNascimento;

do {
  anoNascimento = Number(
    prompt("Digite seu ano de nascimento (entre 1922 e 2021):")
  );
  if (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
    alert(
      "Erro: Ano de nascimento inválido. Por favor, insira um ano entre 1922 e 2021."
    );
  }
} while (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021);

let idade = 2022 - anoNascimento;

alert(`Nome: ${nomeCompleto}\nIdade: ${idade}`);
