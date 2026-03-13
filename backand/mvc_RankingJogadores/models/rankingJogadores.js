class rankingJogadores{
 constructor(id, jogador, pontuacao, nivel){
    if(!jogador || !pontuacao){
        throw new Error("jogador ou pontuacao são obrigatórios");
    }
    this.id = id;
    this.jogador = jogador;
    this.pontuacao = Number(pontuacao);
    this.nivel = nivel;   
}
descricao(){
    return `${this.jogador} - ${ this.acoes}`}

AdicionarPontos(){
if ( this.pontuacao <= 150) return 'pontuacao baixa'; {
if ( this.pontuacao <= 300) return 'pontuacao media'; 
return 'pontuacao alta'
}
}

}

export default rankingJogadores
