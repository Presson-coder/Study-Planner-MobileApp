const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

const getCourseMaterial = (username, callback) => {
  db.all(`SELECT * FROM Courses WHERE username = ?`, [username], (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};


getCourseMaterial('someUsername', (courses) => {
  console.log(courses);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});