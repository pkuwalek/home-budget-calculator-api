import { getUserById } from '../db/users.js';

const getUser = (parent, args) => {
  if (args) {
    return getUserById(args.id);
  }
  return null;
};

export default getUser;
