var alunos = [
    {nome: 'Felipe F.', sexo: 'M', idade: 13},
    {nome: 'Luísa L.', sexo: 'F', idade: 14},
    {nome: 'Marcos M.', sexo: 'M', idade: 14},
    {nome: 'Bianca B.', sexo: 'F', idade: 15},
]

// forEach
alunos.forEach(function(aluno){
    console.log(aluno.idae);
});

// map
var idades = alunos.map(function(aluno){
    return aluno.idade * 2;
});

console.log(alunos);
console.log(idades);

// filter
var alunosMaisVelhos = alunos.filter(function(aluno){
    return aluno.idade > 13;
});

console.log(alunosMaisVelhos);

var alunasMaisVelhas = alunos.filter(function(aluno){
    return aluno.idade > 13 && aluno.sexo === 'F';
});

console.log(alunasMaisVelhas);