import { useState } from "react"

const Aula06_contador = () =>{
    return(
        <div>
            <h2>contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>aumentar</button>
            <button onClick={Contador > 0 && setContador(Contador - 1)}>diminuir</button>

        </div>
    )
}

export default Aula06_contador
