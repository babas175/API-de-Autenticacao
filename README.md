# 🛡️ API de Autenticação – NestJS + Prisma + MySQL

## 📌 Descrição
API desenvolvida em **NestJS** com **Prisma** e **MySQL** para autenticação de usuários.  
Possui fluxo de **cadastro**, **login com JWT** e **rota protegida** para exibir dados do usuário logado.  

Este projeto faz parte de um desafio técnico **Full-stack Auth (Node API + React)**.

---

## 🚀 Tecnologias
- [NestJS](https://nestjs.com/) (Node.js + TypeScript)
- [Prisma ORM](https://www.prisma.io/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Docker & Docker Compose](https://www.docker.com/)

---

## 📂 Estrutura
```
src/
 ┣ auth/
 ┃ ┣ dto/
 ┃ ┃ ┣ login.dto.ts
 ┃ ┃ ┗ signup.dto.ts
 ┃ ┣ auth.controller.ts
 ┃ ┣ auth.service.ts
 ┃ ┣ auth.module.ts
 ┃ ┣ jwt.guard.ts
 ┃ ┣ jwt.strategy.ts
 ┃ ┗ jwt-payload.interface.ts
 ┣ prisma/
 ┃ ┣ prisma.service.ts
 ┃ ┗ prisma.module.ts
 ┣ app.module.ts
 ┗ main.ts
```

---

## ⚙️ Instalação local

### 1. Clone o repositório
```bash
git clone https://github.com/seu-repo/nest-auth-api.git
cd nest-auth-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o `.env`
Crie um arquivo `.env` na raiz do projeto (ou use `.env.example`):

```env
DATABASE_URL="mysql://root@localhost:3306/auth_db"
JWT_SECRET="supersecret"
PORT=3000
```

### 4. Rodar as migrations
```bash
npx prisma migrate dev --name init
```

### 5. Rodar a API
```bash
npm run start:dev
```

API disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🐳 Rodar com Docker

### 1. Subir API, banco e front juntos
```bash
docker compose up --build
```

- **API** → `http://localhost:3000`
- **Front (React)** → `http://localhost:5173`
- **MySQL** → `localhost:3306`

### 2. Estrutura de pastas esperada
```
/project-root
  /api
    Dockerfile
    .env.example
  /front
    Dockerfile
    .env.example
  docker-compose.yml
```

### 3. Exemplo de `docker-compose.yml`
```yaml
version: '3.9'
services:
  db:
    image: mysql:8
    restart: always
    environment:
      MYSQL_ALLOW_EMPTY_PASSWORD: "yes"
      MYSQL_DATABASE: auth_db
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  api:
    build: ./api
    container_name: nest-api
    ports:
      - "3000:3000"
    env_file:
      - ./api/.env
    environment:
      DATABASE_URL: mysql://root@db:3306/auth_db
    depends_on:
      - db

  front:
    build: ./front
    container_name: react-front
    ports:
      - "5173:5173"
    env_file:
      - ./front/.env
    depends_on:
      - api

volumes:
  mysql_data:
```

### 4. Exemplo de `Dockerfile` para a API
```dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

### 5. Exemplo de `Dockerfile` para o Front (React + Vite)
```dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

---

## 🔑 Endpoints

### 🔹 Criar usuário
`POST /auth/signup`

```json
{
  "email": "teste@teste.com",
  "password": "123456"
}
```

---

### 🔹 Login
`POST /auth/login`

```json
{
  "email": "teste@teste.com",
  "password": "123456"
}
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

### 🔹 Usuário logado
`GET /auth/me`

**Headers:**
```
Authorization: Bearer <TOKEN>
```

**Resposta:**
```json
{
  "id": 1,
  "email": "teste@teste.com",
  "createdAt": "2025-09-02T16:40:00.000Z"
}
```

---


