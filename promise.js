let promise = new Promise((resolve, reject) => {
    if (true){
        resolve('deu certo!');
    }
    else {
        reject('deu erro!');
    }
});

promise.then(data => console.log('data');
promise.catch(data => console.log('data');


let promise = new Promise((resolve, reject) => {
    let resultado = false;
    let tempo = 2000;
    setTimeout(() => {
        if (resultado) {
            resolve('deu certo!');
        }
        else {
            reject('deu erro!');
        }
    }, tempo)
});

promise.then(data => console.log(data));
promise.catch(data => console.log(data));

console.log('fui executado antes de todo mundo!');