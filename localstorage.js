window.onload = function(e) {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
        document.getElementById('demo').innerHTML = usuario;
    }
    else {
        localStorage.setItem('usuario', 'cauegonzalez');
        document.getElementById('demo').innerHTML = 'Não foi encontrado ninguém.';
    }
}