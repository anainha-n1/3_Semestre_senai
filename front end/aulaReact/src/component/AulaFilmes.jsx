const Aula04_filmes = ({img, nome, genero} ) => {
    return (
        <div style={estilos.loginConteudo}>
            <div>
                <img src={img} alt="" style={estilos.logo} />
                <h3 style={estilos.textoGeral}>{nome}</h3>
                <p style={estilos.textoGeral}>{genero}</p>
                <button style={estilos.button}>trailer</button>
            </div>
        </div>
    )
}

/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    loginConteudo : {
        display : 'flex',
        width: 300 ,
        justifyContent: 'center',
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
        borderRadius: 8,
        gap: '5px',
        marginTop: '10px',
       
       
    },
    logo: {
        height: '50vh'
    },
    button : {
        width: '100%',
        backgroundColor: 'red',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px'
    },
    textoGeral:{
        marginBottom: 8
    }
}
export default Aula04_filmes
