const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;
const db = require('../database/queries');

app.use(express.static(path.join(__dirname, '../dist')));

app.use(express.json());

app.post('/item', (req, res) => {
  db.save(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})