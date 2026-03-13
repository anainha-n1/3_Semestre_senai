import { useState } from "react"


const Aula06_placar = () =>{
    const [Placar, setPlacar] = useState(0)
    const [Placar2, setPlacar2] = useState(0)
   

    return (
        <div>
            <h2>Time nmr 1</h2>
            <p>{Placar}</p>
            <button onClick={() => setPlacar(Placar + 1)}>Aumentar</button>
            <button onClick={() => setPlacar(Placar + 2)}>Aumentar</button>
            <button onClick={() => setPlacar(Placar + 3)}>Aumentar</button>
            <h2>Time nmr 2</h2>
            <p>{Placar2}</p>
            <button onClick={() => setPlacar2(Placar2 + 1)}>Aumentar</button>
            <button onClick={() => setPlacar2(Placar2 + 2)}>Aumentar</button>
            <button onClick={() => setPlacar2(Placar2 + 3)}>Aumentar</button>
        </div>
    )
}

export default Aula06_placar