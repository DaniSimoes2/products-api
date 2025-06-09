# API RESTful - Gerenciamento de Produtos

# 📌 Descrição geral
Esta é uma API RESTful simples para gerenciar um catálogo de produtos.  
Ela permite criar, listar, editar e deletar produtos.

# 🚀 Tecnologias utilizadas
Node.js

Express.js

Express-validator

Body-parser

# 🌐 URL base
http://localhost:3000

---

# 📦 Instalação
Clone o repositório:  
`git clone https://github.com/DaniSimoes2/products-api.git`

Acesse a pasta do projeto:  
`cd products-api`

Instale as dependências:  
`npm install`

---

# ▶️ Como rodar a aplicação
Para iniciar a API, execute:  
`node app.js`

---

# 📚 Endpoints disponíveis

➡️ GET /products  
Retorna a lista de todos os produtos.

🟢 Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Camiseta",
    "price": 49.90,
    "description": "Camiseta de algodão 100%",
    "stock": 20,
    "category": "Roupas"
  },
  {
    "id": 2,
    "name": "Tênis",
    "price": 199.90,
    "description": "Tênis esportivo",
    "stock": 15,
    "category": "Calçados"
  }
]
```

➡️ POST /products  
Cria um novo produto.  
Corpo da requisição (exemplo em JSON):

```json
{
  "name": "Camiseta",
  "price": 49.90,
  "description": "Camiseta de algodão 100%",
  "stock": 20,
  "category": "Roupas"
}
```

➡️ PUT /products/:id  
Atualiza um produto existente pelo ID.  
Corpo da requisição (exemplo em JSON):

```json
{
  "name": "Camiseta",
  "price": 49.90,
  "description": "Camiseta de algodão 100%",
  "stock": 20,
  "category": "Roupas"
}
```

➡️ DELETE /products/:id  
Deleta um produto pelo ID.

---

# 🛠️ Ferramentas recomendadas para teste  
Insomnia  
Postman

---

# 📝 Licença  
Este projeto está licenciado sob a licença ISC.

---

# 👩‍💻 Desenvolvido por  
Daniele Ferreira Simões