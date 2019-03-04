/* 
Dessa forma, o contexto não permite que de dentro da function seja visualizado a propriedade nome
const time = {
    nome: 'Gama',
    integrantes: ['Marcos', 'João', 'Luísa', 'Carine'],
    mostrarIntegrantes: function(){
        this.integrantes.forEach(function(integrante){
            console.log(integrante + ' é membro do time ' + this.nome)
        });
    }
} */

const time = {
    nome: 'Gama',
    integrantes: ['Marcos', 'João', 'Luísa', 'Carine'],
    mostrarIntegrantes: function(){
        this.integrantes.forEach((integrante) => {
            console.log(integrante + ' é membro do time ' + this.nome)
        });
    }
}

time.mostrarIntegrantes();