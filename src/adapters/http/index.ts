import express from 'express';
import bodyParser from 'body-parser';
import clienteRoutes from './routes/clienteRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/clientes', clienteRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
