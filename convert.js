const sqlite3 = require('sqlite3');
const fs = require('fs');

const db = new sqlite3.Database('./dua_main.sqlite');

db.all('SELECT * FROM sub_category', (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }

  const jsonData = JSON.stringify(rows, null, 2);

  fs.writeFile('sub_category.json', jsonData, (writeErr) => {
    if (writeErr) {
      console.error(writeErr);
    } else {
      console.log('Conversion successful. Data saved to books.json');
    }

    db.close();
  });
});
