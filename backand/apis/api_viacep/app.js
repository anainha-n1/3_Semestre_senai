import express from 'express';

const app = express();
app.use('/dogs', express.static('public'))

app.get('/', async(req, res) =>{
    res.status(200).json("API funcionando");
})

app.get('/cep/:codigo', async(req, res) =>{
    const codigo = req.params.codigo;

    const resposta = await fetch(`https://viacep.com.br/ws/${codigo}/json/`)
    const dados = await resposta.json();

    const cidade = dados.localidade;
    const estado = dados.uf;

   // res.json(dados)
   res.status(200).json({cidade, estado});
})


app.get('/swapi/:codigo', async (req, res) => {
    const codigo = req.params.codigo;

    //metodo fatch é o menssageiro vai ate outra api e traz a resposta
    const resposta = await fetch(`https://swapi.dev/api/people/${codigo}/`)
    const dados = await resposta.json();

    const nome = dados.name;
    const altura = dados.height;
    const peso = dados.mass;
    const olhos = dados.eye_color;


    // res.json(dados)
    res.json({ nome, altura, peso, olhos });
})

app.get('dog/:id', async(req, res) => {
    const id = req.params.id;
    const url = (`https://http.dog/${id}.jp`)
    res.json({url});
})



const porta = 3000;
app.listen(porta, () =>{
    console.log(`servidor rodando http://localhost:${porta}`);
    
})