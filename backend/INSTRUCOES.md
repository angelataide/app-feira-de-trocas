# 🏗️ Entendendo as Camadas do Backend

Este documento explica de forma simples como o backend está organizado e qual é a função de cada pasta (camada) no projeto.

---

## 🚦 Fluxo básico do backend:

**Rota → Controller → Service → Repository → Banco (Prisma) → Resposta**

---

## 📁 Estrutura de Pastas

```plaintext
/src
├── routes/ → Definem os endpoints (URLs)
├── controllers/ → Recebem as requisições e retornam respostas
├── services/ → Regras de negócio, processam dados e decisões
├── repositories/ → Acesso direto ao banco de dados (Prisma)
├── prisma/ → Modelos e configuração do banco (schema.prisma)
├── prismaClient.js → Conexão Prisma
└── index.js → Arquivo principal que sobe o servidor
```

---

## 📜 O que faz cada pasta?

### 🗺️ `routes/` (Rotas)

- Responsável por definir as **URLs da API**.
- Cada rota chama um controller específico.
- Exemplo: `/items`, `/users`, `/proposals`.

---

### 🧠 `controllers/` (Controladores)

- **Recebem a requisição.**
- Chamam a camada de **service**.
- Não devem ter regra de negócio, apenas organizar entrada (req) e saída (res).

---

### ⚙️ `services/` (Serviços)

- Onde mora a **lógica de negócio.**
- Decide o que fazer com os dados, se uma ação é válida, faz cálculos, validações, regras específicas.
- Chama os **repositories** para buscar ou salvar dados.

---

### 🗄️ `repositories/` (Repositórios)

- Fazem a **comunicação direta com o banco de dados**, utilizando o Prisma.
- Nenhuma regra de negócio aqui. Só acesso cru ao banco.

---

### 🔗 `prisma/`

- Contém o arquivo `schema.prisma` que define os modelos e os relacionamentos no banco de dados.

---

### 🔌 `prismaClient.js`

- Arquivo que cria e exporta a conexão com o banco de dados via Prisma.
- Evita criar múltiplas conexões no projeto.

---

### 🚀 `index.js`

- Arquivo principal do backend.
- Faz as configurações do Express, middlewares e registra todas as rotas.
- Inicia o servidor.

---

## 🎯 Fluxo de exemplo (buscar itens)

1. O frontend faz uma requisição para `GET /items`.
2. A rota `/items` chama o `itemController`.
3. O `itemController` chama `itemService`.
4. O `itemService` executa a lógica necessária (ex.: aplicar filtros, validar dados) e chama `itemRepository`.
5. O `itemRepository` consulta o banco usando Prisma e retorna os dados.
6. O `itemService` recebe os dados, processa se necessário e retorna pro `itemController`.
7. O `itemController` envia a resposta para o frontend.

---

## 🔥 Dicas importantes

- 🚫 Não coloque regra de negócio na rota ou no controller.
- ✅ Controllers só organizam entrada e saída.
- ✅ Services decidem **“pode ou não pode”**, **“deve ou não deve”**.
- ✅ Repositories só fazem **“buscar”, “salvar”, “atualizar”** no banco.
- 🧠 Prisma só é usado dentro dos repositories.

---

Qualquer dúvida, pergunte no grupo! Bora codar e deixar esse projeto brabo! 🚀🔥
