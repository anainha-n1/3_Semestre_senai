import Aula01 from "./component/Aula01";
import Aula02 from "./component/Aula02";
import Aula03 from "./component/Aula03";
import Aula04 from "./component/Aula04";
import Aula05 from "./component/Aula05";
import Aula06 from "./component/Aula06";
import Aula07 from "./component/Aula07";
import Aula08 from "./component/Aula08";
import Aula09 from "./component/Aula09";
import Aula10 from "./component/Aula10";
import Aula11 from "./component/Aula11";
import Cabecalho from "./component/Cabecalho";

import { estilos } from "./Style/estilos";


const App = () => {
  return (
    <div style={estilos.fundo}>
      <Cabecalho aula='React'/>
      <main style={estilos.conteudo}>
        <h2>aulas</h2>
        <div style={estilos.lista_aulas}>
          <Aula01 />
          <Aula02 />
          <Aula03 />
          <Aula04/>
          <Aula05/>
          <Aula06/>
          <Aula07/>
          <Aula08/>
          <Aula09/>
          <Aula10/>
           <Aula11/>
        </div>
      </main>

    </div>
  )
}

export default App;