import mysql from 'mysql';

const connection = mysql.createConnection({
  multipleStatements: true,
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7244905',
  password: 'pehyQUGSZ7',
  database: 'sql7244905',
});

connection.connect((err) => {
  if (!err) {
    console.log('Database is connected');
  } else {
    console.log('No connection with database');
  }
});

export default connection;
