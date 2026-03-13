class bruxo {
    #nivelEnergia = 100

    nome;
    idade;
    feitico;
    casa
    nivel_magia

    constructor(nome, idade, feitico, casa, nivel, nivelEnergia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel = nivel;
        this.#nivelEnergia = nivelEnergia
    }

    verEnergia(){
        return this.#nivelEnergia
    }

    recarregarEnergia(){
       return this.#nivelEnergia += 10
    }

    lancarFeitico(){
       return this.#nivelEnergia -= 10
    }

}

const bruxo1 = new bruxo("harry", 17, "lumos", "Corvinal", 1, 100)

console.log(bruxo1.verEnergia());
console.log(bruxo1.lancarFeitico());
console.log(bruxo1.recarregarEnergia());

