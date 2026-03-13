class bruxo {
    #nivelEnergia = 100

    nome;
    idade;
    feitico;
    casa
    nivel_magia

    constructor(nome, idade, feitico, casa, nivel_magia, nivelEnergia){
        this.nome = nome;
        this.idade = idade;
        this.feitico = feitico;
        this.casa = casa;
        this.nivel_magia = nivel_magia;
        this.#nivelEnergia = nivelEnergia
    }

    apresentar(){
        return `${this.nome}`
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

class grifinoria extends bruxo {
    constructor (nome, feitico){
        super(nome, feitico)
        this.casa = 'Grifinoria'
    }
    apresentar(){
        return `${this.nome} ${this.casa}`
    }
    feiticoAssinatura(){
       return this.feitico  = 'leviosa'
    }
}
class sonserina extends bruxo {
    constructor (nome, feitico = 1){
        super(nome, feitico)
        this.casa = 'Sonserina'
    }
    apresentar(){
        return `${this.nome} ${this.casa}`
    }
    feiticoAssinatura(){
      return  this.feitico = 'lumos'
    }
}


const harry = new grifinoria('harry')
console.log(harry.apresentar());
console.log(harry.feiticoAssinatura());



const rom = new sonserina('rom', )
console.log(harryTraira.apresentar());
console.log(rom.feiticoAssinatura());


const hermione = new bruxo('hermione')
console.log(hermione.apresentar());

