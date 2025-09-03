FROM node:18-slim

# Definir pasta de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Gerar build do NestJS
RUN npm run build

# Expor a porta da API
EXPOSE 3000

# Rodar em modo produção
CMD ["npm", "run", "start:prod"]
