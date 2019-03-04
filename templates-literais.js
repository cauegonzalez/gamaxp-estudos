const time = {
    nome: 'Gama',
    integrantes: ['Marcos', 'João', 'Luísa', 'Carine'],
    mostrarIntegrantes: function(){
        this.integrantes.forEach((integrante) => {
            console.log(`${integrante} é membro do time ${this.nome}`)
        });
    }
}

time.mostrarIntegrantes();