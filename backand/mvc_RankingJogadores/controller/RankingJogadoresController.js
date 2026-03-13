import rankingJogadores from "../models/rankingJogadores.js";

let listaRankingJogadores = [
    new rankingJogadores(1, "fulano", 43, "baixo" ),
    new rankingJogadores(2, 'beltrano', 899,"alto" ),
    new rankingJogadores(3, "ciclano", 120, "medio" )
]

const rankingJogadoresController = {
    listar: (req, res) => {
        res.render('RankingJogadores.ejs', {rankingJogador: listaRankingJogadores})
    },
    adicionar: (req,res) => {
        const {jogador, pontuacao, nivel} = req.body;

        try{
            const novoRankingJogadores = new rankingJogadores(
                listaRankingJogadores.length + 1,
                jogador,
                Number(pontuacao),
                nivel
                
            );
            listaRankingJogadores.push(novoRankingJogadores);
            res.redirect('/RankingJogadores');
        }catch(e)
        {
            res.status(400).render('RankingJogadores.ejs', {listar: listaRankingJogadores, erro: e.message})
        }
    },

    marcarPontuacao: (req,res) =>{
        const {id} = req.body;
        const RankingJogadores = listaRankingJogadores.find(l => listaRankingJogadores.id === Number(id))
        RankingJogadores.marcarPontuacao();
        res.redirect('/RankingJogadores');
    }
}

export default rankingJogadoresController