import { Pool } from 'pg';
const BD = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bd_ordem_servicos',
    port: 5432,
    password: 'admin'
})

//const BD = new Pool({
//    user: 'postgress',
 //   host: 'db.oyaxqkekxerakjgzngpf.supabase.co',
   // database: 'postgres',
 //   port: 5432,
 //   password: 'bancodedadossenai'
//})


const testarConexao = async () => {
    try {
        const cliente = await BD.connect();
        console.log('sucesso');
        cliente.release()
        
    }
    catch (erro) {
        console.log('erro', error.message);
        
    }
 }

 export {BD, testarConexao};