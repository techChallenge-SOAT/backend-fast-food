import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clienteRoutes';
import logger from '../../config/logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Defina as rotas, middleware e outras configurações necessárias aqui
app.use('/clientes', clienteRoutes);

app.get('/', (req, res) => {
  logger.info('Página inicial acessada');
  res.send('Sistema Clientes e Pedidos');
});

export function startServer() {
  app.listen(PORT, () => {
    logger.info('Servidor iniciado na porta ' + PORT);
    console.log(
      'Server is Successfully Running, and App is listening on port ' + PORT,
    );
  });
}

// Exporte outros módulos ou funções relacionados à configuração da aplicação, se necessário
