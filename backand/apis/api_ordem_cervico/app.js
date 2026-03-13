import express from 'express';
import { BD, testarConexao } from "./db.js";
import rotasUsuarios from './src/routes/rotasUsuarios.js'
import Departamentos from './src/routes/RotasDepartamentos.js'
import OrdemServicos from './src/routes/rotasServico.js'
import swaggerUi from 'swagger-ui-express'
import documentacao from './config/swagger.js';


const app = express();
app.use(express.json());
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(documentacao))


app.get('/', async (req, res) => {
    await testarConexao();
    // res.status(200).json('Api funcionando')
    res.redirect('/swagger')
})
app.use(rotasUsuarios)
app.use(Departamentos)
app.use(OrdemServicos)

const porta = 3000
app.listen(porta, () => {
    console.log(`http://localhost:${porta}`);
   
})



