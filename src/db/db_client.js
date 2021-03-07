import pg from 'pg';

const { Client } = pg;

const ExecuteDbQuery = (selector) => {
  const newClient = new Client({
    user: 'root',
    host: 'localhost',
    database: 'testdb',
    password: 'root',
    port: 5432,
  });

  newClient.connect();

  return newClient.query(selector, (err, res) => {
    console.log(err, res);
    newClient.end();
  });
};

export default ExecuteDbQuery;
