const Aula05 = () => {
    function botaoClique() {
        alert("clicou")
        console.log('clique');

    }
    const botaoDuploClique = () => {
        alert('duplo clique')
    }

    function entradaMause(event) {
        console.log('entrou');
        event.target.style.backgroundColor = '#688ce6'


    }
    function saidaMause(event) {
        console.log('saiu');
        event.target.style.backgroundColor = '#ff0000'


    }

    function alterarCor(event) {
        if (event.key == "a") {
            event.target.style.color = 'rgb(44, 0, 240)'
            console.log("a");
           
        } else if (event.key == "v") {
            event.target.style.color = 'rgb(17, 255, 0)'
        } else if (event.key == "c") {
            event.target.style.color = 'rgb(126, 126, 126)'
        } else if (event.key == "r") {
            event.target.style.color = 'rgb(137, 0, 116)'
        }

    }

    return (
        <div >
            <h2>Aula 05 - Eventos</h2>
            <h3>Os eventos são fundamentais para criar interatividade em aplicações web</h3>
            <hr />
            <p>onClick</p>
            <button onClick={botaoClique}>aqui</button>
            <p onDoubleClick={botaoDuploClique}>duplo clique</p>

            <hr />

            <p>onChance</p>

            <input onChange={() => console.log(event.target.value)} type="text" placeholder="digite..." />

            <select onChange={() => console.log(event.target.value)}>
                <option value="1A">1 A EM</option>
                <option value="2A">2 A EM</option>
                <option value="3A">3 A EM</option>
                <option value="3B">3 B EM</option>
            </select>

            <hr />
            <p>onMouseEnter / onMouseLeave</p>
            <p onMouseEnter={entradaMause} onMouseLeave={saidaMause}>aqui</p>

            <hr />

            <p>onKeyDown</p>
            <input type="text" onKeyDown={(event) => alert(event.key)} />
            <input type="text" onKeyDown={alterarCor} placeholder="a - azul, v - verde, c - cinza, r - roxo" />
        </div>
    )
}

export default Aula05