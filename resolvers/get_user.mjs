import Users from '../db/users.mjs';

export default function getUser(parrent, args) {
  return Users.users.find((user) => user.id === args.id);
}
