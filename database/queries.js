const aboutItem = require('./schema').aboutItem;

const save = (item, cb) => {
  let doc = new aboutItem(item);

  doc.save((err, results) => {
    if (err) {
      console.log('Error in queries saving item');
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
}

const find = (id, cb) => {
  aboutItem.find(id, (err, results) => {
    if (err) {
      console.log('Error finding item in queries');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const update = (body, cb) => {
  aboutItem.updateOne({id: body.id}, {$push: {qA: body.qA}}, (err, results) => {
    if (err) {
      console.log('Error adding question to db');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

const updateAnswer = (body, cb) => {
  console.log(body)
  aboutItem.update({id: body.id, "qA._id": body.qId}, {$push: {"qA.$.answers": body.answer}}, (err, results) => {
    if (err) {
      console.log('Error finding item');
      cb(err, null);
    } else {
      cb(null, results);
    }
  })
}

module.exports = {
  save,
  find,
  update,
  updateAnswer
};