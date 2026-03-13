const Aula07_MultiComponentes = () => {
    return (
        <div>
            <p>meu componente padrao</p>
            <MeuComponenteNomeado/>
        </div>
    )
}

export const MeuComponenteNomeado = () =>{
    return (
        <p>Meu componente nomeado 1</p>
    )
}

export const enderecoServidor = "localhost"

// export {MeuComponenteNomeado, enderecoServidor}

export default Aula07_MultiComponentes