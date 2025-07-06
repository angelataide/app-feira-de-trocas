# TrocAi 🌱

Uma aplicação web completa para conectar pessoas de uma mesma comunidade e facilitar trocas de itens usados — como livros, roupas, brinquedos e eletrônicos — promovendo o consumo consciente e o fortalecimento dos vínculos comunitários.

---

## 📌 Objetivo

Permitir que usuários:

-   Cadastrem itens que desejam trocar
-   Visualizem itens disponíveis com filtros e busca
-   Realizem propostas de troca entre si
-   Aceitem ou recusem propostas recebidas

---

## ✨ Funcionalidades

-   Cadastro de itens com nome, descrição e categoria
-   Lista de itens disponíveis com filtros por categoria e barra de busca
-   Propostas de troca entre usuários
-   Aceitação ou recusa de propostas
-   Sistema de autenticação de usuários

---

## 🏗️ Arquitetura do Projeto

O projeto é dividido em duas grandes partes:

-   **Frontend**: Interface web (ReactJS) para interação dos usuários.
-   **Backend**: API RESTful desenvolvida em Node.js com Express, responsável por toda a lógica de negócio, autenticação, regras de troca e persistência dos dados.

### Estrutura do Backend

O backend segue o padrão de camadas:

-   **Routes**: Definem os endpoints da API.
-   **Controllers**: Recebem as requisições e retornam respostas.
-   **Services**: Implementam as regras de negócio.
-   **Repositories**: Comunicação direta com o banco de dados via Prisma ORM.
-   **Prisma**: Modelos e configuração do banco de dados (PostgreSQL).

### Fluxo Básico

`Rota → Controller → Service → Repository → Banco (Prisma) → Resposta`

---

## 🧱 Tecnologias Utilizadas

| Camada             | Tecnologia       |
| ------------------ | ---------------- |
| **Frontend**       | ReactJS          |
| **Estilo**         | (definir)        |
| **Backend**        | Node.js, Express |
| **ORM**            | Prisma ORM       |
| **Banco de Dados** | PostgreSQL       |

---

## 🚀 Como rodar o projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/angelataide/app-feira-de-trocas
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    cd backend && npm install
    cd ../frontend && npm install
    ```

3. **Configure o banco de dados:**

    - Defina a variável `DATABASE_URL` no arquivo `.env` do backend.
    - Execute as migrations do Prisma:

        ```bash
        npx prisma migrate dev
        ```

4. **Inicie o projeto:**

    ```bash
    npm run dev
    ```

    O frontend e backend serão iniciados simultaneamente.

---

## 📂 Estrutura de Pastas (Backend)

```
backend/src
├── routes/         # Endpoints da API
├── controllers/    # Lógica de entrada/saída
├── services/       # Regras de negócio
├── repositories/   # Acesso ao banco (Prisma)
├── prisma/         # Modelos e migrations
├── prismaClient.js # Conexão Prisma
└── index.js        # Inicialização do servidor
```

---

## 👥 Autores

-   Anderson Assumpção Junior
-   Leonardo Ferreira de Cerqueira
-   Isadora Maria Silva de Souza
-   João Victor Felicio
-   Angela Ataide dos Santos
-   Paulo Douglas Melo da Silva

---

## 📄 Licença

Este projeto é open-source para fins acadêmicos e comunitários.

---

Dúvidas? Sugestões? Fale com a equipe! 🚀
