class Pessoa {
    constructor(nome, rg, cpf) {
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
    }

    mostrarNome() {
        console.log(this.nome);
    }

    mostrarRg() {
        console.log(this.rg);
    }

    mostrarCpf() {
        console.log(this.cpf);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, rg, cpf, rf, salario) {
        super(nome, rg, cpf);
        this.rf = rf;
        this.salario = salario;
    }

    mostrarRegistroFuncionario() {
        console.log(this.rf);
    }

    mostrarSalario() {
        console.log(this.salario);
    }
}

const gonzalez = new Funcionario('Cauê Gonzalez', '84885398', '00691300194', '12354', 'R$ 10000,00');

console.log(`O funcionário ${gonzalez.nome} possui o salário: ${gonzalez.salario}`);
gonzalez.mostrarNome();
gonzalez.mostrarRg();
gonzalez.mostrarCpf();
gonzalez.mostrarRegistroFuncionario();
gonzalez.mostrarSalario();