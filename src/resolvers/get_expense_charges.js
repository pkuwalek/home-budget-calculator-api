import Charges from '../db/charges.js';

function isChargeAssignedToExpense(expense, charge) {
  return charge.expenseId === expense.id;
}

export default function getExpenseCharges(expense) {
  const oneTimeCharges = Charges.OneTimeCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  );
  const namedOTC = oneTimeCharges.map((charge) => {
    const typedCharge = charge;
    typedCharge.name = 'OneTimeCharge';
    return typedCharge;
  });
  const recurrentCharges = Charges.RecurrentCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  );
  const namedRC = recurrentCharges.map((charge) => {
    const typedCharge = charge;
    typedCharge.name = 'RecurrentCharge';
    return typedCharge;
  });
  const useCharges = Charges.UseCharge.filter(
    isChargeAssignedToExpense.bind(this, expense),
  );
  const namedUC = useCharges.map((charge) => {
    const typedCharge = charge;
    typedCharge.name = 'RecurrentCharge';
    return typedCharge;
  });
  let charges = [];
  charges = charges.concat(namedOTC, namedRC, namedUC);
  return charges;
}
