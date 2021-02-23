import Charges from '../db/charges.js';

function isChargeAssignedToExpense(expense, charge) {
  return charge.expenseId === expense.id;
}

function addChargeNameProperty(typeName, charge) {
  const typedCharge = charge;
  typedCharge.name = typeName;
  return typedCharge;
}

export default function getExpenseCharges(expense) {
  const oneTimeCharges = Charges.OneTimeCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  ).map(
    addChargeNameProperty.bind(this, 'OneTimeCharge'),
  );
  const recurrentCharges = Charges.RecurrentCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  ).map(
    addChargeNameProperty.bind(this, 'RecurrentCharge'),
  );
  const useCharges = Charges.UseCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  ).map(
    addChargeNameProperty.bind(this, 'UseCharge'),
  );
  let charges = [];
  charges = charges.concat(oneTimeCharges, recurrentCharges, useCharges);
  return charges;
}
