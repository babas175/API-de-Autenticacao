# 📖 Projeto Fullstack – NestJS + Next.js + Docker

## 📌 Descrição
Este projeto é composto por duas partes principais:  
- **Backend**: API REST desenvolvida em NestJS, utilizando Prisma ORM e banco de dados MySQL.  
- **Frontend**: Aplicação em Next.js com TailwindCSS, responsável pela interface de cadastro, login, perfil e logout.  

A aplicação está preparada para rodar **localmente** ou em **containers Docker** via `docker-compose`.

---

## 🚀 Tecnologias
- **Backend**
  - NestJS
  - Prisma ORM
  - MySQL
  - JWT para autenticação

- **Frontend**
  - Next.js
  - React
  - TailwindCSS

- **Infra**
  - Docker & Docker Compose

---

## 📂 Estrutura de Pastas
```
project-root/
 ┣ Backend_auth/        → API (NestJS + Prisma)
 ┣ front-auth/          → Front (Next.js + Tailwind)
 ┗ docker-compose.yml   → Orquestração com Docker
```

---

## ⚙️ Instalação Local

### 1. Clonar o repositório
```bash
git clone https://github.com/babas175/API-de-Autenticacao.git
cd projeto
```

### 2. Backend
```bash
cd Backend_auth
npm install
npx prisma migrate dev --name init
npm run start:dev
```
API disponível em → [http://localhost:4000](http://localhost:4000)

### 3. Frontend
```bash
cd front-auth
npm install
npm run dev
```
Front disponível em → [http://localhost:3000](http://localhost:3000)

---

## 🐳 Rodando com Docker Compose

### 1. Criar arquivos `.env`
**Backend_auth/.env**
```env
DATABASE_URL=mysql://root@db:3306/auth_db
JWT_SECRET=supersecret
PORT=4000
```

**front-auth/.env**
```env
NEXT_PUBLIC_API_URL=http://api:4000
```

### 2. Subir containers
```bash
docker compose up -d --build
```

### 3. Acessar serviços
- Backend → [http://localhost:4000](http://localhost:4000)  
- Frontend → [http://localhost:3000](http://localhost:3000)  
- MySQL → `localhost:3306`

---

## 🔑 Funcionalidades
- **Cadastro** (`/`) → cria um novo usuário.  
- **Login** (`/login`) → autentica usuário e gera token JWT.  
- **Perfil** (`/profile`) → exibe dados do usuário logado.  
- **Logout** → remove token e redireciona para login.  

---

## 📄 Licença
Projeto desenvolvido para fins de estudo e desafio técnico.  
