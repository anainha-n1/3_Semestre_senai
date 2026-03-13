import { estilos } from "../Style/estilos"
import Aula04_IMC from "./Aula04_IMC"
import AulaFilmes from "./AulaFilmes"


const Aula04 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>aula 04 - Props</h2>
            <h3>conceitos</h3>
            <p>criação</p>
            <Aula04_IMC nome='jorge' peso={80} altura={1.80} cor='yellow'/> 
             <Aula04_IMC nome='fulano' peso={90} altura={1.70} cor='red'/>
               <Aula04_IMC nome='ciclana' peso={32} altura={1.49}cor='pink'/>
               <hr />
               <AulaFilmes img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-jNEzzALPhnyBKBUPd2vuV_-aeIGT9dQQ_n7V9gOZXIYHXDB2FqeqBthXauTdet50NMy&s' nome='As braquelas' genero='comedia/crime' anoLancamento= '2004'/>

        </div>
    )
}

export default Aula04