import ExecuteDbQuery from './db_client.js';

const getAllUsers = () => {
  const selectAllUsers = 'SELECT * from users;';
  const queryResult = ExecuteDbQuery(selectAllUsers);

  return queryResult
    .then((userList) => userList.rows.map((user) => {
      const container = {};
      container.id = user.user_id;
      container.name = user.name;
      container.email = user.email;
      return container;
    }));
};

// poszukac jak wyciagnac jeden rekord z queryresult, bo dostane tablice z 1 rekordem
const getUserById = (id) => {
  const selectUserById = `SELECT user FROM users WHERE user_id = ${id}`;
  const queryResult = ExecuteDbQuery(selectUserById);
  console.log('were in getuserbyid');
  return queryResult;
};

export { getAllUsers, getUserById };
