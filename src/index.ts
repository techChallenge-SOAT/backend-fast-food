import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Sistema Pedidos');
});

app.listen(PORT, () => {
  console.log(
    'Server is Successfully Running, and App is listening on port ' + PORT,
  );
});
