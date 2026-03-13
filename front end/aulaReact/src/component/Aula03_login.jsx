import { useState } from 'react'


const Aula03_Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [menssagem, setMenssagem] = useState('')

    function verificar (){
        if (email == 'senai@senai.br' && senha == '123') {
           setMenssagem('entrou com sucesso')
        } else {
           setMenssagem('email ou senai invalidos')
        }
    }

    return (
        <div style={estilos.loginConteudo}>
            <h1><img src="https://d2k0cnxtow3qpj.cloudfront.net/arqs/sesisp/ups/SESI-SENAI-COR-sp-preto-1-.png" alt="" style={estilos.logo} /> Login</h1>
            <div style={estilos.divSegundaria}>
                <label htmlFor="" style={estilos.tituloIn}>Email</label>
                <input type="email" placeholder='Digite seu email' style={estilos.input} onChange={(event) => setEmail(event.target.value)} value={email} />
            </div>
            <div style={estilos.divSegundaria}>
                <label htmlFor="" style={estilos.tituloIn}>Senha</label>
                <input type="text" placeholder='Digite seu Senha' style={estilos.input} onChange={(event) => setSenha(event.target.value)} value={senha} />
            </div>
            <button style={estilos.button} onClick={verificar}>Entrar</button>
            <p>{menssagem}</p>
        </div>
    )
}
/** @type {{ [key: string]: import('react').CSSProperties }} */

const estilos = {
    loginConteudo : {
        display : 'flex',
        width: 300 ,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: "0 auto",
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.3)',
        borderRadius: 8,
        gap: '5px',
        marginTop: '10px'
       
    },
    logo: {
        height: 50
    },
    divSegundaria: {
        marginBottom: 20,
    },
    tituloIn : {
       textAlign: 'left',
       display: 'block',
       fontWeight:'bold'
     

    },
    input : {
        width: '100%',
        padding: 8,
        borderRadius: '4px',
        border: '1px solid #ccc'
    },
    button : {
        width: '100%',
        backgroundColor: 'red',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
       
    }

}

export default Aula03_Login
