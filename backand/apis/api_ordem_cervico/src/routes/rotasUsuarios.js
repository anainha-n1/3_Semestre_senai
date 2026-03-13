import express, { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

router.get('/usuarios', async (req, res) => {
    try {
        const query = `SELECT * FROM usuarios ORDER BY id_usuario`

        const usuarios = await BD.query(query);

        return res.status(200).json(usuarios.rows);
    } catch (error) {
        console.log('Erro', error.message);
        return res.status(500).json({ error: 'erro' })

    }
})



// router.post('/usuarios', async (req, res) => {
//     const nome = req.body.nome;
//     const email = req.body.email;
//     const senha = req.body.senha;

//     try {

//         const comando = `INSERT INTO test(nome, email, senha)
//      VALUES('${nome}', '${email}', '${senha}')`

//         console.log(comando);
//         await BD.query(comando)
//         res.status(201).json("usuario cadastrado.");

//     } catch (error) {
//         console.log('Erro', error.message);
//         res.status(500).json({ error: 'erro' })
//     }

// })

router.post('/usuarios', async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    try {

        const comando = `INSERT INTO usuarios(nome, email, senha)
     VALUES($1, $2, $3) `


        return res.status(201).json("usuario cadastrado.");
        const valores = [nome, email, senha];
        await BD.query(comando, valores)
        console.log(comando, valores);

    } catch (error) {
        console.log('Erro', error.message);
        return res.status(500).json({ error: 'erro' })
    }

})

router.put('/usuarios/:id_usuario', async (req, res) => {
    const { id_usuario } = req.params;
    const { nome, email, senha } = req.body
    try {
        const verificarUsuario = await BD.query(`SELECT * FROM usuarios where id_usuario = $1`, [id_usuario])
        if (verificarUsuario.rows.length === 0) {
            return res.status(404).json({ message: 'usuario não encontrao' })
        }
        const comando = `UPDATE USUARIOS SET nome = $1, email = $2, senha =$3 WHERE id_usuario = $4`;
        const valores = [nome, email, senha, id_usuario];
        await BD.query(comando, valores);
        return res.status(200).json('usuario atualizado');
    } catch (error) {
        console.log('Erro', error.message);
        return res.status(500).json({ error: 'erro' })
    }
})

export default router