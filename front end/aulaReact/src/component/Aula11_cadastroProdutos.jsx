import { useState } from "react"
import { estilos } from "../Style/estilos"
import Aula11_card from "./Aula11_produto"

const Aula11_produto= () => {
   const[listaProdutos, setlistaProdutos] = useState([
    {
            listaNome: "carrinho",
            listaPreco: 20,
            linkProduto: 'https://www.amazon.com.br/Wheels-Pacote-Sortidos-Mattel-Multicor/dp/B000GKUEVE/ref=asc_df_B000GKUEVE?mcid=5561f6baf995397ca8184ceeb5140c5d&tag=googleshopp00-20&linkCode=df0&hvadid=709869765588&hvpos=&hvnetw=g&hvrand=8773269160838097691&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100681&hvtargid=pla-521568263950&psc=1&language=pt_BR&gad_source=4',
            listalinkImagen: "https://m.media-amazon.com/images/I/81GMRnT1SsL._AC_SY300_SX300_QL70_ML2_.jpg",
            frete: true
        },
        {
            listaNome: "protetor solar com cor",
            listaPreco: 46,
            linkProduto: 'https://www.dermadoctor.com.br/darrow-actine-protetor-solar-com-cor-antioleosidade-fps60-40g?srsltid=AfmBOopA5BTa4CfGzBh76lhoXVBrisKo_TM4TcaJ7E2Isn23sOzKf5cX',
            listalinkImagen: "https://cdn.awsli.com.br/2500x2500/764/764220/produto/54955696/b4e0135e16.jpg",
            frete: false
        }

   ])
   const[listaNome, setlistaNome] = useState('')
   const[listalinkImagen, setlistalinkimagen] = useState('')
   const[listaPreco, setlistaPreco] = useState(0)
   const[linkProduto, setlinkProduto] = useState('')
   const [frete, setfrete] = useState(false)
   const[categoria, setcategoria] = useState('')
   function adicionar() {
    
   }
   return(
    <div>
        <h1>cadastro de produtos</h1>
        <div style={{display: 'flex', flexDirection: "column", gap: 10}}>
            <input type="text" placeholder="Nome" value={listaNome}
            onChange={(event)=> setlistaNome(event.target.value)}/>

            <input type="number" placeholder="preco" value={listaPreco}
            onChange={(event)=> setlistaPreco(Number(event.target.value))}/>

            <input type="text" placeholder="linkproduto" value={linkProduto}
            onChange={(event)=> setlinkProduto(event.target.value)}/>

            <input type="text" placeholder="linkimagen" value={listalinkImagen}
            onChange={(event)=> setlistalinkimagen(event.target.value)}/>

            <select name="" id="" onChange={(event) => setcategoria(event.target.value)} value={categoria}>
                    <option value="">selecione uma categoria</option>
                    <option value="Eletronicos">eletronicos</option>
                    <option value="brinquedos">brinquedos</option>
                    <option value="monitores">monitores</option>
                </select>
                <label >
                <input type="checkbox" onChange={(event) => setfrete(event.target.value)} checked={frete} />
                    frete gratis
                    </label>
                <button onClick={adicionar}>Adicionar produto</button>
                <hr />
                <div style={{display: "flex", gap: 10, flexWrap: "wrap"}}>
                {
                    listaProdutos.map((produto, pos)=> (
                        <Aula11_card key={pos} produto={produto}/>
                    ))
                }
                </div>

        </div>
    </div>

   )
}

export default Aula11_produto