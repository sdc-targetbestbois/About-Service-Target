const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 8000;
const db = require('../database/queries');

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(cors());
app.use(express.json());

app.get('/item/:id', (req, res) => {
  db.find(req.params, (err, about) => {
    if (err) {
      res.status(500).send('Error retrieving items details');
    } else {
      res.send(about);
    }
  })
})

app.post('/item', (req, res) => {
  db.save(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})

app.put('/question', (req, res) => {
  db.update(req.body, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  })
})

app.put('/answer', (req, res) => {
  db.updateAnswer(req.body, (err, results) => {
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