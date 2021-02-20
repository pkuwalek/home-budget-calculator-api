import { GraphQLUnionType } from 'graphql';
import OneTimeChargeType from './one_time_charge.mjs';
import RecurrentChargeType from './recurrent_charge.mjs';
import UseChargeType from './use_charge.mjs';

const ChargeType = new GraphQLUnionType({
  name: 'Charge',
  description: 'Charges assigned to estate',
  types: [OneTimeChargeType, RecurrentChargeType, UseChargeType],
  resolveType: (charge) => {
    if (charge.name === 'OneTimeCharge') { return OneTimeChargeType; }
    if (charge.name === 'RecurrentCharge') { return RecurrentChargeType; }
    if (charge.name === 'UseCharge') { return UseChargeType; }
    return null;
  },
});

export { ChargeType as default };
