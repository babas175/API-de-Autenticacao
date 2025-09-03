# 🎨 Front-end – Next.js + TailwindCSS

## 📌 Descrição
Interface desenvolvida em **Next.js** com **TailwindCSS** para consumir a API de autenticação (NestJS + Prisma + MySQL).  
O projeto possui as telas de **Cadastro**, **Login**, **Perfil** e **Logout**, todas estilizadas em **dark mode**.

---

## 🚀 Tecnologias
- [Next.js](https://nextjs.org/) (React + TypeScript)
- [TailwindCSS](https://tailwindcss.com/)
- [Docker](https://www.docker.com/)

---

## 📂 Estrutura
```
src/
 ┣ pages/
 ┃ ┣ api/          → chamadas para a API backend
 ┃ ┣ index.tsx     → tela de cadastro (principal)
 ┃ ┣ login.tsx     → tela de login
 ┃ ┣ profile.tsx   → tela de perfil (apenas logado)
 ┃ ┗ _app.tsx      → inicialização global
 ┣ styles/         → estilos globais
 ┗ ... 
```

---

## ⚙️ Instalação local

### 1. Clone o repositório
```bash
git clone https://github.com/seu-repo/front-auth.git
cd front-auth
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o `.env.local`
Crie o arquivo `.env.local` na raiz:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Rodar em desenvolvimento
```bash
npm run dev
```
Front disponível em: [http://localhost:3000](http://localhost:3000)

### 5. Rodar em produção
```bash
npm run build
npm start
```

---

## 🐳 Rodar com Docker

### 1. Dockerfile
Exemplo de `Dockerfile` para o front:

```dockerfile
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

### 2. Arquivo `.env.example`
Inclua no repositório:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 🔑 Funcionalidades

- **Cadastro (`/`)**  
  Usuário pode criar uma conta (email + senha).

- **Login (`/login`)**  
  Usuário realiza login com email e senha e recebe **JWT**.

- **Perfil (`/profile`)**  
  Mostra informações do usuário logado (rota protegida).

- **Logout**  
  Remove o token do `localStorage` e redireciona para login.

---

## 📄 Licença
Este projeto foi desenvolvido apenas para fins de desafio técnico.  
