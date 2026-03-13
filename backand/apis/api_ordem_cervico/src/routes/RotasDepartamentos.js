import express, { Router } from 'express'
import { BD } from '../../db.js'

const router = Router();


router.get('/departamentos', async (req, res) => {
    try {
        
        const query = `SELECT * FROM departamentos ORDER BY id_departamento`
       
        const departamentos = await BD.query(query);

        
        res.status(200).json(departamentos.rows);

    } catch (error) {
        console.error('Erro.', error.message)
        res.status(500).json({error:'Erro'})
    }
})

router.put('/departamentos/:id_departamento', async (req, res) => {
    const { id_departamento } = req.params;
    const { nome, descricao} = req.body
    try {
        const verificardepartamento = await BD.query(`SELECT * FROM departamentos where id_departamento = $1`, [id_departamento])
        if (verificardepartamento.rows.length === 0) {
            return res.status(404).json({ message: 'departamento não encontrado' })
        }
        const comando = `UPDATE departamento SET nome = $1, email = $2, senha =$3 WHERE id_departamento = $4`;
        const valores = [nome,  descricao, id_departamento];
        await BD.query(comando, valores);
        return res.status(200).json('departamento atualizado');
    } catch (error) {
        console.log('Erro', error.message);
        return res.status(500).json({ error: 'erro' })
    }
})

export default router
