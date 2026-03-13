const Aula09_Nome = ({ nome, index, apagar }) => {
    return (
        <div>
            <p>{nome}</p>
            <button onClick={apagar}>apagar</button>
        </div>

    )

}

export default Aula09_Nome