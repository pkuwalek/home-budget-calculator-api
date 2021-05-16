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

const getUserById = (id) => {
  const selectUserById = `SELECT * FROM users WHERE user_id = ${id}`;
  const queryResult = ExecuteDbQuery(selectUserById);
  return queryResult.then((users) => users.rows.map((singleuser) => {
    const container = {};
    container.id = singleuser.user_id;
    container.name = singleuser.name;
    container.email = singleuser.email;
    console.log(container);
    return container;
  }));
};

export { getAllUsers, getUserById };
