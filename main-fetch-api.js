
fetch("https://api.github.com/users/octocat")
    .then(response => response.json())
    .then(result => {
        const dados = JSON.stringify(result);
        document.getElementById('demo').innerHTML = dados;
    })
    .catch(function(err) {
        console.log(err);
    });