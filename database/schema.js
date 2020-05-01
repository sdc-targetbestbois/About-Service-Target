const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/targaryen')
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  });

let aboutItemSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  details: {
    highlights: [{
      type: String,
      maxLength: 100
    }],
    specs: [{
      key: {
        type: String,
        maxLength: 50,
      },
      value: {
        type: String,
        maxLength: 100
      }
    }],
    description: String
  },
  shipping: {
    details: {
      dimensions: {
        length: Number,
        width: Number,
        height: Number
      },
      weight: Number
    }
  },
  qA: [{
    question: String,
    name: String,
    date: Date,
    answers: [{
      answer: String,
      name: String,
      date: Date,
      helpful: Number,
      notHelpful: Number
    }]
  }]
});

const aboutItem = mongoose.model('aboutItem', aboutItemSchema);

module.exports = { aboutItem };
