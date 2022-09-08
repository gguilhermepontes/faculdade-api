const { request } = require('express');
const database = require('../models');

//Get
class InformacoesController {
    //Get todos os usuarios registrados
    static async pegaTodosUsuarios(req, res){
        try{
            const todosUsuarios = await database.informacoes.findAll();
            res.status(200).json(todosUsuarios);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
    //Get usuario por ID
    static async pegaUmUsuario(req, res){
        const { id } = req.params;
        try {
            const umaPessoa = await database.informacoes.findOne({ where: {id: Number(id)}});
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //Atualizar informações do usuario
    static async AtualizaPessoa(req, res) {
        const { id } = req.params;
        const novasInformarcoes = req.body

        try {
            await database.informacoes.update(novasInformarcoes, {where: {id: Number(id)}})
            const pessoaAtualizada = await database.informacoes.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    //Deletar um usuario
    static async deletarUsuario(req, res) {
        const { id } = req.params;

        try {
            await database.informacoes.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: 'Usuario com o ID: ' + id +' Foi deletado com sucesso!'});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}



module.exports = InformacoesController;