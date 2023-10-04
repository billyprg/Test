import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    { name: 'moneyTransferApp.db', location: 'default' },
    () => {
      console.log('Database opened successfully');
    },
    error => {
      console.error('Error opening database: ', error);
    }
  );

// Create User and Transfers tables (run this once):
db.transaction(tx => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, balance REAL)'
  );
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS transfers (id INTEGER PRIMARY KEY AUTOINCREMENT, senderId INTEGER, receiverId INTEGER, amount REAL)'
  );
});

// Insert dummy data (run this once to populate the database):
db.transaction(tx => {
  tx.executeSql('INSERT INTO users (name, email, balance) VALUES (?, ?, ?)', [
    'User 1',
    'user1@example.com',
    1000.0,
  ]);
  // Insert data for other users here...
});