const bodyParser = require('body-parser');
const informacoes = require('./informacoesRoute')

module.exports = app => {
    app.use(bodyParser.json());
    app.use(informacoes)
}