// db.js
import mysql from 'mysql';

const db = mysql.createConnection({
  host: 'your-host',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database',
});

export default db;
