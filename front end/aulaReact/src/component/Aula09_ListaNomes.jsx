import { useEffect, useState } from "react"
import Aula09_Nome from "./Aula09_nome"
import { estilos } from "../Style/estilos"


const Aula09_ListaNome = () => {
    const [listaPresenca, setListaPresenca] = useState([])
    const [nome, setNome] = useState("")

    useEffect( () => {
        const listaSalvo = localStorage.getItem('valorlista') || "[]";
        setListaPresenca(JSON.parse(listaSalvo))
    }, [])

    function botaoExcluir(nm) {
        const novasPresencas = listaPresenca.filter((nome) => nome != nm)
        setListaPresenca(novasPresencas)
    }

    function AdicionarBotao() {
        localStorage.setItem('valorlista', JSON.stringify([...listaPresenca, nome]))
        setListaPresenca([...listaPresenca, nome])
        setNome("")

    }

    function botaoLimpar() {
        localStorage.clear('valorlista')
        setListaPresenca([])
        setNome("")
    }

    return (
        <div style={estilos.cardAula}>
            <h1>Lista</h1>
            <input type="text" name="" id="" placeholder="digite" onChange={(event) => setNome(event.target.value)} value={nome} />
            <button onClick={AdicionarBotao}>adicionar</button>
            {
                listaPresenca.map((nome, index) => (
                    <Aula09_Nome key={index} nome={nome} apagar={() => botaoExcluir(nome)} />
                ))
            }

            <button onClick={botaoLimpar}>Limpar</button>
        </div>

    )

}

export default Aula09_ListaNome
