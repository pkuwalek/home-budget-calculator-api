import executeDbQuery from './db_client.js';

const getAllUsers = () => {
  const selectAllUsers = 'SELECT * from users;';
  const queryResult = executeDbQuery(selectAllUsers);
  console.log(queryResult);
};

getAllUsers();

export default {
  users: [
    { id: 1, name: 'Kubuś', email: 'kubus@puchatek.pl' },
    { id: 2, name: 'Krzyś', email: 'krzys@puchatek.pl' },
  ],
};
