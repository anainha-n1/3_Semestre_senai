import express from 'express'
import rankingJogadoresController from "../controller/rankingJogadoresController.js";

const router = express.Router();

router.get('/rankingJogadores', rankingJogadoresController.listar);

router.post('/rankingJogadores', rankingJogadoresController.adicionar);

router.post('/rankingJogadores/marcar-pontuacao', rankingJogadoresController.marcarPontuacao);

export default router;


