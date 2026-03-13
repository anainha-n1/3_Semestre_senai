import { useState } from "react"
import { estilos } from "../Style/estilos"
import Aula09_Numero from "./Aula09_Numero"
import Aula09_ListaNome from "./Aula09_ListaNomes"

const Aula09 = () => {
    const [numerosSorteados, setNumerosSorteados] = useState([10, 43, 28, 2])

    function botaoSortear() {
        const novoNumero = Math.floor(Math.random() * 60) + 1
        setNumerosSorteados([...numerosSorteados, novoNumero])
    }

    function botaoExcluir() {
        const novosNumeros = numerosSorteados.filter((numero) => numero != nr)
        setNumerosSorteados(novosNumeros)
    }

    return (
        <div style={estilos.cardAula}>
            <h2>Aula 09 - listas em react</h2>
            <h3>Exibindo conteudos dinamicamente com listas </h3>
            <hr />

            <button onClick={botaoSortear}>Novo numero</button>

            <h3>Lista de numero sorteados:</h3>
            {/* a função map é como o for para arrays/vetores */}
            {
                numerosSorteados.map((numero, index) => (
                  <Aula09_Numero key={index} numero={numero} excluir={botaoExcluir}/>
                ))
            }
            <hr />
            <Aula09_ListaNome/>
        </div>
    )
}

export default Aula09
