
import Aula11_produto from "./Aula11_cadastroProdutos"


const Aula11_card = ({produto}) => {
    return (
        <div style={estilos.cardProduto}>
            <  img src={produto.listalinkImagen} alt="" style={estilos.Imagem} />
            <h2 style={estilos.nomeProduto}>{produto.listaNome}</h2>
            <p style={estilos.preco}>R$ {Number(produto.listaPreco).toFixed(2)}</p>
            <p>{produto.categoria}</p>
            <a href={produto.linkproduto} style={estilos.botao}>ver produto</a>
        </div>

    )
}

 const estilos = {
    cardProduto: {
        border: "1px solid #ccc",
        padding: 10,
        width: 250
    },


   Imagem: {
        height: 150,
        width: "100%",
        objectFit: "contain"
    },


    nomeProduto: {
        fontSize: 14,
        color: "#333",
        textAlign: "center"
    },


    preco: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e30613"
    },


    botao: {
        display: "inline-block",
        background: "#e30613",
        color: "white",
        textDecoration: "none",
        padding: "8px 12px",
        borderRadius: 5,
        marginTop: 10,
        fontWeight: "bold"
    },


    freteGratis: {
        fontWeight: "bold"
    }
};



export default Aula11_card