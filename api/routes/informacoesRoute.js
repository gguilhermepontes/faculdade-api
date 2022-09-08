const { Router } = require('express')

const informacoesController = require('../controller/InformacoesController.js');

const router = Router();
router.get('/informacoes', informacoesController.pegaTodosUsuarios)
router.get('/informacoes/:id', informacoesController.pegaUmUsuario)
router.put('/informacoes/:id', informacoesController.AtualizaPessoa)
router.delete('/informacoes/:id', informacoesController.deletarUsuario)

module.exports = router;