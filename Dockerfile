# Use a imagem oficial do Node.js como imagem base
FROM node:18-alpine3.18

# Crie um diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copie o arquivo de dependências (package.json) e o arquivo de bloqueio de dependências (package-lock.json)
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta em que o aplicativo será executado
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]