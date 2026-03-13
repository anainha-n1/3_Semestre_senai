import { useState } from "react"
import { estilos } from "./GameEstilos"


const Game = () => {
    const [numeroSecreto, setSecreto] = useState(sortearNumero)
    const [Chute, setChute] = useState('')
    const [mensagem, setMensagem] = useState('adivinhe um numero entre 1 e 100')
    const [Tentativas, setTentativas] = useState(1)
    const [jogoFinalizado, setjogoFinalizado] = useState(false)

    function sortearNumero() {
        return Math.floor(Math.random() * 100) + 1
    }

    function botaoChutar() {
        console.log(botaoChutar);
        console.log(numeroSecreto);


        if (numeroSecreto == Chute) {
            setMensagem(`parabens, acertou em ${Tentativas} tentativas`)
            setjogoFinalizado(true)
        } else if (numeroSecreto < Chute) {
            setMensagem(`voce chutou ${Chute} o n° secreto é menor`)
            setChute('')
            setTentativas(Tentativas + 1)
        } else {
            setMensagem(`voce chutou ${Chute} o n° secreto é maior `)
            setChute('')
            setTentativas(Tentativas + 1)
        }
    }

    function botaoNovoJogo() {
        setChute('')
        setjogoFinalizado('')
        setTentativas('')
        setMensagem('Escolha um numero entre 1 e 100')
        setSecreto(sortearNumero)
    }

    return (
        <section style={estilos.container}>
            <div style={estilos.conteudo}>
                <div style={estilos.informacoes}>
                    <div style={estilos.texto}>
                        <h1 style={estilos.h1}>Jogo do Numero Secreto</h1>
                        <p style={estilos.mensagem}>{mensagem}</p>
                    </div>
                    <input onChange={(event) => setChute(event.target.value)} value={Chute} type="number" style={estilos.chute} />
                    <div style={estilos.botoes}>
                        <button onClick={botaoChutar} style={estilos.botao}>Chutar</button>
                        <button onClick={botaoNovoJogo} style={estilos.botao}>Novo Jogo</button>
                    </div>
                </div>
                <img src="./img/ia.png" alt="" style={estilos.imagem} />
            </div>
        </section>
    )
}
export default Game
