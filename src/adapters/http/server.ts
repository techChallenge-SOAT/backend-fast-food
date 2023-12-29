import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clienteRoutes';
import itemRoutes from './routes/itemRoutes';
import pedidoRoutes from './routes/pedidoRoutes';
import { handleMercadoPagoWebhook } from './routes/webhooks/handleMercadoPagoWebhook';
import swaggerUi from 'swagger-ui-express';

import swaggerDocs from '../../config/swagger.json';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/clientes', clienteRoutes);

app.use('/itens', itemRoutes);

app.use('/pedidos', pedidoRoutes);

app.use('/webhook/mercadopago', handleMercadoPagoWebhook);

app.get('/', (req, res) => {
  res.send('Sistema Clientes e Pedidos');
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta ' + PORT);
});

export { app };
