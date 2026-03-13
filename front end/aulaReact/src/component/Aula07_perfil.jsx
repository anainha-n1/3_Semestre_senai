import { useState } from "react"
import { estilos } from "../Style/estilos"



const Aula07_Perfil = () => {
    return (
        <div style={estilao.fundo}>
            <Imagem />
            <InfoUsuario />
            <BotaoSeguir />

        </div>
    )
}


export const Imagem = () => {
    return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIOjZ8qrWXCk3rUFZ1d5BDVFbeHRW57ji0OA&s" alt="" style={estilao.imagem}/>
    )
}

export const InfoUsuario = () => {
    return (
        <p>pink</p>
    )
}
export const BotaoSeguir = () => {
    const [visivel, setVisivel] = useState(false)

    return (
        <button onClick={() => setVisivel(!visivel)} style={estilao.botao}>
            {visivel == false ? <p>seguir</p> : <p>parar de seguir</p>}
        </button>
    )
}
/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilao = {
    imagem: {
        borderRadius: 50,
        height: 50,
        width:70,
        height:70  
    },
    fundo: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        width: '150px',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center',
        margin:'0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap:10

       
    },
    botao: {
        backgroundColor: '#f726f4',
        borderRadius: 5,
        border: 'none',
        minWidth: 50,
        minHeight: 25,
        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
        color: '#fff',
        padding: 3
    },
    h2: {
        fontSize: 15,
       
       
    }
   
}


export default Aula07_Perfil
 