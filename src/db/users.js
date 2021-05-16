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
  const selectUserById = `SELECT user_id, name, email FROM users WHERE user_id = ${id}`;
  const queryResult = ExecuteDbQuery(selectUserById);
  return queryResult.then((users) => {
    const FirstRow = users.rows[0];
    if (FirstRow) {
      return ({
        id: FirstRow.user_id,
        name: FirstRow.name,
        email: FirstRow.email,
      });
    }
    return null;
  });
};

export { getAllUsers, getUserById };
