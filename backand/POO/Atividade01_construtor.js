class Pessoa{

constructor(nome, idade, feitico, casa, nivel){
    this.nome = nome;
    this.idade = idade;
    this.feitico = feitico;
    this.casa = casa;
    this.nivel = nivel;
   }
}

const pessoal = new Pessoa("harry", 17, "lumos", "Corvinal", "medio");
console.log(pessoal);
const pessoa2 = new Pessoa("Hermione Granger", 17, "Lacarnum Inflamari", "Gryffindor", "alto");
console.log(pessoa2);