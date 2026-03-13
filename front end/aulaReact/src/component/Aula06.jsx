import { useState } from "react"
import { estilos } from "../Style/estilos"
import Aula06_placar from "./Aula06_placar"

const Aula06 = () => {

    const [nome, setNome] = useState('')

    const [cidade, setcidade] = useState('')

    const [telefone, setTelefone] = useState('')

    const [visivel, setVisivel] = useState(false)

    function botaoLimpar() {
        setNome('')
        setcidade('')
        setTelefone('')

    }

    return (
        <div style={estilos.cardAluno}>
            <h2>Aula 06</h2>
            <h3>o hook useState adiciona estado a componentes funcionais</h3>

            <input type="text" onChange={(event) => setNome(event.target.value)} value={nome} />
            <input type="text" onChange={(event) => setcidade(event.target.value)} value={cidade} />
            <input type="text" onChange={(event) => setTelefone(event.target.value)} value={telefone} />
            <p>ola {nome}</p>
            <p>voce mora em {cidade}</p>
            <p>seu telefone é {telefone}</p>
            <button onClick={botaoLimpar}>limpar</button>
            <hr />
            <button onClick={() => setVisivel(!visivel)}>
                
                {visivel == false ? <p>mostrar</p> : <p>ocultar</p>}

            </button>

            {visivel == false ? <p>r$ ***,**</p> : <p>R$ 123,00</p>}        
            <hr />

            <Aula06_placar/> 


        </div>
    )
}

export default Aula06
