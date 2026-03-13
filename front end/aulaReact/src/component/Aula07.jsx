import { estilos } from "../Style/estilos"
import Aula07_MultiComponentes, { MeuComponenteNomeado } from "./Aula07_MultiComponentes"
import Aula07_Perfil from "./Aula07_perfil"


const Aula07 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>aula 07 modulos</h2>
            <h3>importação e exportação</h3>
            <hr />
            <Aula07_MultiComponentes/>
            <MeuComponenteNomeado/>
            <Aula07_Perfil/>
        </div>
    )
}

export default Aula07