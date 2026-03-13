class herois{
    #poder
    
    nome;
    idade;
    
constructor(nome, idade, poder, nivelAbilidade){
    this.nome = nome;
    this.idade = idade;
    this.#poder = poder;
    this.nivelAbilidade = nivelAbilidade;

      this.poder = documento;
    }

    apresentar(){
        return `${this.nome}, ${this.idade}`
    }
    mostrarPoder(){
        return this.poder;
    }
}

class clams extends herois{
    constructor (nome, clam){
        super(nome)
        this.clam = clam
    }
    apresentar(){
            return `nome de heroi é${this.nome}, clam: ${this.clam}`;
        }
}
    
    const heroi1 = new clams("heroi1", "fogo");
    console.log(heroi1.apresentar());

    //asdfg
    
class clamas extends herois{
    constructor (nome, clama){
        super(nome)
        this.clama = clama
    }
    apresentar(){
            return `nome de heroi é${this.nome}, clam: ${this.clama}`;
        }
}
    
    const heroi2 = new clams("heroi2", "agua");
    console.log(heroi2.apresentar());
