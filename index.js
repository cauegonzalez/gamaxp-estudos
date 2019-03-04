var alunos = [
    {nome: 'Felipe F.', sexo: 'M', idade: 13},
    {nome: 'Luísa L.', sexo: 'F', idade: 14},
    {nome: 'Marcos M.', sexo: 'M', idade: 14},
    {nome: 'Bianca B.', sexo: 'F', idade: 15},
]

// forEach
alunos.forEach(function(aluno){
    console.log(aluno.idade);
});
console.log('=================================');
// map
var idades = alunos.map(function(aluno){
    return aluno.idade * 2;
});

console.log(alunos);
console.log(idades);
console.log('=================================');


// filter
var alunosMaisVelhos = alunos.filter(function(aluno){
    return aluno.idade > 13;
});

console.log(alunosMaisVelhos);
console.log('=================================');

var alunasMaisVelhas = alunos.filter(function(aluno){
    return aluno.idade > 13 && aluno.sexo === 'F';
});

console.log(alunasMaisVelhas);
console.log('=================================');

// find
var aluno = alunos.find(function(aluno){
    return aluno.nome === 'Felipe F.';
});
console.log(aluno);
console.log('=================================');

// every
var maiorQueDez = alunos.every(function(aluno){
    return aluno.idade > 10;
});

console.log(maiorQueDez);
console.log('=================================');

// some
var algumMenino = alunos.some(function(aluno){
    return aluno.sexo === 'M';
});

console.log(algumMenino);
console.log('=================================');

// FOR .. OF
for (var aluno of alunos) {
    console.log(aluno);
}