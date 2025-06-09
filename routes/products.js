// Importando bibliotecas
const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Simulando um banco de dados em memória (array)
let products = [];
let nextId = 1;

// Rota: Listar todos os produtos
router.get('/', (req, res) => {
    res.json(products);
});

// Rota: Obter um produto pelo ID
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product);
});

// Rota: Criar um novo produto com validação
router.post('/',
    [
        body('name').notEmpty().withMessage('Nome é obrigatório'),
        body('price').isFloat({ gt: 0 }).withMessage('Preço deve ser maior que zero')
    ],
    (req, res) => {
        // Validar os dados da requisição
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Criar o produto
        const { name, price } = req.body;
        const newProduct = {
            id: nextId++,
            name,
            price
        };

        products.push(newProduct);

        res.status(201).json(newProduct);
    }
);

// Rota: Atualizar um produto existente com validação
router.put('/:id',
    [
        body('name').notEmpty().withMessage('Nome é obrigatório'),
        body('price').isFloat({ gt: 0 }).withMessage('Preço deve ser maior que zero')
    ],
    (req, res) => {
        // Validar os dados da requisição
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const productId = parseInt(req.params.id);
        const productIndex = products.findIndex(p => p.id === productId);

        if (productIndex === -1) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }

        // Atualizar os dados do produto
        const { name, price } = req.body;
        products[productIndex] = { id: productId, name, price };

        res.json(products[productIndex]);
    }
);

// Rota: Deletar um produto
router.delete('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    // Remover produto
    products.splice(productIndex, 1);

    res.json({ message: 'Produto deletado com sucesso' });
});

module.exports = router;

