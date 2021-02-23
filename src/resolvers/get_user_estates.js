import Estates from '../db/estates.js';

export default function getUserEstates(user) {
  return Estates.estates.filter((estate) => estate.userId === user.id);
}
