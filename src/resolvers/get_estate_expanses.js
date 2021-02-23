import Expenses from '../db/expenses.js';

export default function getEstateExpenses(estate) {
  return Expenses.expenses.filter((expense) => expense.estateId === estate.id);
}
