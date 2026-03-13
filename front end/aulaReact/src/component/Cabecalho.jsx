import logoReact from '../assets/react.svg'
import '../style/Cabecalho.css'
const Cabecalho = ( { aula } ) => {
    return (
      <header className='cabecalho'>
        <img src={logoReact} alt="" />
        <div>
            <h1>SENAI</h1>
            <p>aulas</p>
        </div>
        <img src="https://sesisenaisp.zendesk.com/hc/theming_assets/01HZKNSQKYGMZYJKC2QCPSG5FA" alt="" />
      </header>
    )
}

export default Cabecalho