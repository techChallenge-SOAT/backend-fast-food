# Use uma imagem base adequada para a sua aplicação. Neste exemplo, usamos uma imagem Python como base.
FROM node:20-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos necessários para o diretório de trabalho
COPY . /app/

# Instala as dependências da sua aplicação
RUN npm install

# Compila a aplicação
RUN npm run build

# Expõe a porta que sua aplicação estará ouvindo
EXPOSE 3000

# Comando para iniciar a sua aplicação (ajuste de acordo com o seu aplicativo)
CMD ["npm", "start"]
