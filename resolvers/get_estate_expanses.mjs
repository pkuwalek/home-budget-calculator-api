import Expenses from '../db/expenses.mjs';

export default function getEstateExpenses(estate) {
  return Expenses.expenses.filter((expense) => expense.estateId === estate.id);
}
