import Users from '../db/users.mjs';

export default function getUsers() {
  return Users.users;
}
