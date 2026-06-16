# Ótica Realeza

Sistema Full Stack desenvolvido para gerenciamento de contatos de uma ótica, permitindo que clientes enviem solicitações através do site e que administradores gerenciem os atendimentos em um painel administrativo seguro.

## 🚀 Tecnologias Utilizadas

### Frontend

* React
* Vite
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL
* JWT Authentication
* BcryptJS
* Zod

### Banco de Dados

* PostgreSQL (Neon)

### Deploy

* Frontend: Vercel
* Backend: Render

---

## ✨ Funcionalidades

### Site Institucional

* Página responsiva
* Formulário de contato
* Integração com WhatsApp
* Validação de campos
* Envio de solicitações para o banco de dados

### Painel Administrativo

* Login com autenticação JWT
* Proteção de rotas
* Listagem de contatos
* Busca por nome ou e-mail
* Exclusão de contatos
* Copiar e-mail do cliente
* Acesso rápido ao WhatsApp
* Estatísticas:

  * Total de mensagens
  * Mensagens recebidas hoje
  * Mensagens dos últimos 7 dias

---

## 🔐 Segurança

* Senhas criptografadas com Bcrypt
* Autenticação JWT
* Rotas protegidas por middleware
* Variáveis de ambiente com .env
* Validação de dados utilizando Zod

---

## 📁 Estrutura do Projeto

/frontend
/src
/components
/pages
/services

/backend
/src
/controllers
/routes
/middlewares
/database
/validations

/prisma

---

## ⚙️ Instalação

### Backend

```bash
cd backend
npm install
```

Criar arquivo .env:

```env
DATABASE_URL=seu_database_url
JWT_SECRET=sua_chave_secreta
PORT=3333
```

Executar:

```bash
npx prisma generate
npx prisma db push
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Criar arquivo .env:

```env
VITE_API_URL=http://localhost:3333
```

---

## 🌐 Deploy

### Frontend

* Vercel
* https://otica-realeza.vercel.app/

### Backend

* Render
* https://otica-realeza-api.onrender.com

### Banco de Dados

* Neon PostgreSQL


---

## 👨‍💻 Autor

Caio Santos

LinkedIn:
https://www.linkedin.com/in/caiosantos-dev/

GitHub:
https://github.com/caiofernandofs
