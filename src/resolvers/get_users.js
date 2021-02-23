import Users from '../db/users.js';

export default function getUsers() {
  return Users.users;
}
