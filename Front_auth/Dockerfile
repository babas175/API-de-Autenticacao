FROM node:18

# Definir pasta de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta do Next.js
EXPOSE 3000

# Rodar em modo desenvolvimento (hot reload)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
