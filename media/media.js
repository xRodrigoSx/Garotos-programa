const readline = require('readline-sync');

function cadastrarAluno() {
  const nome = readline.question('Qual o nome do aluno? ');
  const idade = readline.questionInt('Qual a idade do aluno? ');

  const notas = [];
  for (let i = 0; i < 3; i++) {
    const nota = readline.questionFloat(`Qual a nota ${i + 1} do aluno? `);
    notas.push(nota);
  }

  const media = calcularMedia(notas);
  const aluno = { nome, idade, notas, media };
  return aluno;
}

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

function media() {
  const alunos = [];

  const qtdAlunos = readline.questionInt('Quantos alunos deseja cadastrar? ');

  for (let i = 0; i < qtdAlunos; i++) {
    console.log(`Cadastro do Aluno ${i + 1}:`);
    const aluno = cadastrarAluno();
    alunos.push(aluno);
  }

  console.log('Alunos cadastrados:');
  alunos.forEach((aluno, index) => {
    console.log(`Aluno ${index + 1}:`);
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Notas: ${aluno.notas.join(', ')}`);
    console.log(`Média: ${aluno.media.toFixed(2)}`);
  });

  const medias = alunos.map((aluno) => aluno.media);
  const mediaTurma = calcularMedia(medias);
  console.log(`\nMédia da Turma: ${mediaTurma.toFixed(2)}`);
}

media();
