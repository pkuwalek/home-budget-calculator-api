import Charges from '../db/charges.mjs';

function isChargeAssignedToExpense(expense, charge) {
  return charge.expenseId === expense.id;
}

export default function getExpenseCharges(expense) {
  const oneTimeCharges = Charges.OneTimeCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  );
  const namedOTC = oneTimeCharges.map((charge) => {
    charge.name = 'OneTimeCharge';
    return charge;
  });
  const recurrentCharges = Charges.RecurrentCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  );
  const namedRC = recurrentCharges.map((charge) => {
    charge.name = 'RecurrentCharge';
    return charge;
  });
  const useCharges = Charges.UseCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  );
  const namedUC = useCharges.map((charge) => {
    charge.name = 'RecurrentCharge';
    return charge;
  });
  let charges = [];
  charges = charges.concat(namedOTC, namedRC, namedUC);
  return charges;
}
