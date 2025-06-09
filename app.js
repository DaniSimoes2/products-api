// Importando bibliotecas
const express = require('express');
const bodyParser = require('body-parser');

// Importando as rotas de produtos
const productRoutes = require('./routes/products');

// Inicializando o app
const app = express();

// Middleware para interpretar JSON no body das requisições
app.use(bodyParser.json());

// Usando as rotas
app.use('/products', productRoutes);

// Inicializando servidor na porta 3000
app.listen(3000, () => {
    console.log('API rodando na porta 3000');
});
