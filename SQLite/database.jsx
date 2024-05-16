const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

console.log('Connected to the users database.');

db.serialize(() => {
  db.run(`CREATE TABLE Users (
            username TEXT NOT NULL,
            password TEXT NOT NULL,
            email TEXT NOT NULL
          )`, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Users table created.');
  });

  db.run(`CREATE TABLE Courses (
            course_id INTEGER PRIMARY KEY,
            course_name TEXT NOT NULL,
            course_material TEXT NOT NULL,
            username TEXT NOT NULL,
            FOREIGN KEY(username) REFERENCES Users(username)
          )`, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Courses table created.');
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});