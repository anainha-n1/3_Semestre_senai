import '../Style/Aula03.css'
import { estilos } from '../Style/estilos'
import Aula03_login from './Aula03_login'
const Aula03 = () => {
    return (
        <div style={estilos.cardAula}>
            <h2>componentes e estilização</h2>
            <h3>criação</h3>
            <p>criar etc </p>

            <hr />
            <p className='texto'>CSS externo</p>
            <p className='descricao'>forma simples</p>

            <hr />
            <p style={ {color:'blue', fontWeigt: 'bold'} }>estilização inline</p>
            <p style={ {fontStyle: 'italic'} }>estilos aplicados a elementos como objeto</p>

            <hr />
            <p>css modules</p>
            <p>simples para moible</p>
            <hr />
            <Aula03_login/>
        </div>
    )
}

export default Aula03