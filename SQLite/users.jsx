import React, { useEffect } from 'react';
import SQLite from 'react-native-sqlite-storage';

let db;

function App() {
  useEffect(() => {
    db = SQLite.openDatabase(
      {
        name: 'MainDB',
        location: 'default',
      },
      () => {},
      error => { console.log(error); }
    );
  }, []);

  const handleRegister = (username, password) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (username, password)',
        [],
        () => {
          tx.executeSql(
            'INSERT INTO Users (username, password) VALUES (?, ?)',
            [username, password]
          );
        }
      );
    });
  };

  const handleLogin = (username, password) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Users WHERE username = ? AND password = ?',
        [username, password],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            // User exists
          } else {
            // User does not exist
          }
        }
      );
    });
  };
}

export default App;