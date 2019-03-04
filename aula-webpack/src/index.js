const $ = require('jquery');

const nomes = ['Alice', 'Julio', 'Romulo', 'Ana'];
nomes.forEach(nome => {
    $('body').append(`<h1>${nome}</h1>`);
})