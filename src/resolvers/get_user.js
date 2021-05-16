import { getUserById } from '../db/users.js';

const getUser = (parent, args) => {
  if (args) {
    return getUserById(args.id);
  }
  console.log('smth went wrong in getUser');
  return null;
};

export default getUser;
