class pessoa {
    nome;
    constructor(nome) {
        this.nomen = nome
    }

    apresentar(){
        return `${this.nome}`;
    }
}

class PessoaFisica extends pessoa{
    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf
    }
    apresentar(){
        return `${this.nome}, meu cpf: ${this.cpf}`;
    }
}
class PessoaJuridica extends pessoa{
    constructor(nome, cnpj){
        super(nome);
        this.cnpj = cnpj
    }
    apresentar(){
        return `${this.nome}, meu cnpj: ${this.cnpj}`;
    }
}

const ana = new PessoaFisica("ana", "123.456.789-00");
console.log(ana.apresentar());

const sesi = new PessoaJuridica("SESI - Andradina", "123.456.789-00")
console.log(sesi.apresentar());

