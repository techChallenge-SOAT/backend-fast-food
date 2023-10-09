# Use uma imagem base adequada para a sua aplicação. Neste exemplo, usamos uma imagem Python como base.
FROM python:3.8

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos necessários para o diretório de trabalho
COPY requirements.txt /app/
COPY app.py /app/

# Instala as dependências da sua aplicação
RUN pip install --no-cache-dir -r requirements.txt

# Expõe a porta que sua aplicação estará ouvindo
EXPOSE 8080

# Comando para iniciar a sua aplicação (ajuste de acordo com o seu aplicativo)
CMD ["python", "app.py"]
