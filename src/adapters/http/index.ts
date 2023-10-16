import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './clienteRoutes';
import pedidoRoutes from './pedidoRoutes';

const app = express();
const port = process.env.PORT || 3000; // Porta em que o servidor HTTP irá rodar

app.use(bodyParser.json());

// Configure as rotas para a entidade "Cliente"
app.use('/clientes', clienteRoutes);

// Configure as rotas para a entidade "Pedido"
app.use('/pedidos', pedidoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
