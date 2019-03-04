const URL_TO_FETCH = "https://apilegal.com.br";

fetch(URL_TO_FETCH, {
    method: 'get' // opcional. procurar outras configurações possíveis
})
.then(function(response) {
    // use a resposta
})
.catch(function(err) {
    console.log(err);
});


console.log('================');

const URL_TO_FETCH = "https://apilegal.com.br";

fetch(URL_TO_FETCH, {
    method: 'get' // opcional. procurar outras configurações possíveis
})
.then(response => response.json())
.then(result => console.log(result))
.catch(function(err) {
    console.log(err);
});

console.log('================');

const URL_TO_FETCH = "https://api.github.com/users/octocat";

fetch(URL_TO_FETCH)
    .then(response => response.json())
    .then(result => {
        const dados = JSON.stringify(result);
        document.getElementById('demo').innerHTML = dados;
    })
    .catch(function(err) {
        console.log(err);
    });
