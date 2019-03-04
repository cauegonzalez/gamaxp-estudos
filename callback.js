const nome = 'joão';
primeiroCumprimento(nome, segundoCumprimento);
// segundoCumprimento(nome);

function primeiroCumprimento(nome, callback){
    setTimeout(() => {
        console.log(`Olá ${nome}`);
        callback(nome)
    }, 2000);
}

function segundoCumprimento(nome){
    console.log(`Você está bem. ${nome}?`);
}