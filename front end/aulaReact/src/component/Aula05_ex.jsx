import { estilos } from '../Style/estilos'

const Aula05_ex = () => {

    function entradaMouse(event) {
        console.log('mouse entrou');
        event.target.style.backgroundColor = 'rgb(97, 119, 241)'

    }
    function saidaMouse(event) {
        console.log('mouse saiu');
        event.target.style.backgroundColor = 'rgb(255, 0, 0)'

    }

    function alterarCor(event) {
        if (event.key == "a") {
            event.target.style.color = 'rgb(44, 0, 240)'
            console.log("a");

        } else if (event.key == "p") {
            event.target.style.color = 'rgb(0, 0, 0)'
        } else if (event.key == "v") {
            event.target.style.color = 'rgb(255, 0, 0)'
        } else if (event.key == "y") {
            event.target.style.color = 'rgb(232, 249, 0)'
        } else if (event.key == "g") {
            event.target.style.color = 'rgb(50, 251, 0)'
        } else if (event.key == "+") {
            event.target.style.fontSize = '16px'
        } else if (event.key == "-") {
            event.target.style.fontSize = '5px'
        } else if (event.key == "0") {
            event.target.style.fontSize = 'none'
        }

    }

    return (
        <div>
            <h2>EXERCICIO</h2>
            <button onClick={() => alert('clicou o botao1')}>botao1</button>
            <button onClick={() => alert('clicou no segundo')}>botao2</button>
            <input onChange={() => console.log(event.target.value)} type="text" placeholder='Digite algo...' />
            <div style={algo.quadrado} onMouseEnter={entradaMouse} onMouseLeave={saidaMouse}>.</div>
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <input type="text" onKeyDown={alterarCor} onClick={(event) => console.log(event)
            } onMouseEnter={(event) => console.log(event)} onMouseLeave={(event) => console.log(event)} placeholder='a - azul, v - verde, c - cinza, r - roxo' />
        </div>
    )
}

/** @type {{ [key: string]: import('react').CSSProperties }} */
const algo = {
    quadrado: {

        width: "100px",
        height: "100px"
    }
}

export default Aula05_ex
