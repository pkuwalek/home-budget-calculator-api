import pg from 'pg';

const { Client } = pg;

const DbClient = (() => {
  let dbClient;
  // client constructor
  const InitClient = () => {
    dbClient = new Client({
      user: 'root',
      host: 'localhost',
      database: 'testdb',
      password: 'root',
      port: 5432,
    });
  };
  return {
    initClient: () => {
      // check if client exists, if not create new client
      if (dbClient === undefined) {
        InitClient();
      }
      return dbClient;
    },
  };
})();

const ExecuteDbQuery = (selector) => {
  const dbClient = DbClient.initClient();

  dbClient.connect();

  return dbClient.query(selector);
};

export default ExecuteDbQuery;
