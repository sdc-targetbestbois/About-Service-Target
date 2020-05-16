const data = require('./data').data;
const save = require('./queries').save;

let count = 0;

data.forEach(item => {
  save(item, (err, results) => {
    if (err) {
      count++;
    } else {
      console.log(`Saved: ${results.id} ${results.name}`);
      count++;
    }
    if (count === data.length) {
      process.exit();
    }
  })
})
