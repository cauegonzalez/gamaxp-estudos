function primeiroCumprimento(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Olá ${nome}!`);
            resolve(nome);
        }, 2000); 
    });
}

function segundoCumprimento(nome) {
    console.log(`Você está bem, ${nome}?`);
};

primeiroCumprimento('joão')
    .then(nome => segundoCumprimento(nome))
    .catch(err => console.log('deu ruim', err));