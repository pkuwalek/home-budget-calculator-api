import Estates from '../db/estates.mjs';

export default function getUserEstates(user) {
  return Estates.estates.filter((estate) => estate.userId === user.id);
}
