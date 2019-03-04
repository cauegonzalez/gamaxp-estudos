// let
var a = 2;
{
    let a = 3;
    console.log(a);
}
console.log(a);

console.log('========================');

// const
const nome = 'João';
// nome = 'Júlio'; // causa erro pois const deve ser constante'
console.log(nome);

console.log('========================');

const pessoa = {
    nome: 'João'
}
console.log(pessoa);

pessoa.sobrenome = 'da Silva';
console.log(pessoa);