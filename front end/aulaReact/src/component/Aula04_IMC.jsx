const Aula04_IMC = ({nome , peso , altura , cor}) => {

    // let nome = 'ana';
    // let peso = '60';
    // let altura = '1.53';
    let imc = peso / (altura * altura);

    return (
        <div>
            <h3 style={{color:cor}}>cauculadora de IMC</h3>
            <p>oi {nome}</p>
            <p>peso {peso}kg</p>
            <p>altura {altura}</p>
            <p>IMC: {imc.toFixed(1)}kg/m²</p>
        </div>
    )
}

export default Aula04_IMC