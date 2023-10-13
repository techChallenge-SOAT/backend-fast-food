import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    'Server is Successfully Running, and App is listening on port ' + PORT,
  );
});
