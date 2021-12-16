import express from 'express';

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(201).json({
    ok: true,
    msg: 'Token ok',
  });
  res.json({ok: true, msg: 'Everything is good'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
