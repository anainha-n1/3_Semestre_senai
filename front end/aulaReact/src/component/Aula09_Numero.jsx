const Aula09_Numero = ({numero, index, excluir}) => {
    return (
        <p>
            {numero}
        <button onClick={excluir}>excluir</button>
        </p>
    )
}
export default Aula09_Numero