import { GraphQLUnionType } from 'graphql';
import OneTimeChargeType from './one_time_charge.js';
import RecurrentChargeType from './recurrent_charge.js';
import UseChargeType from './use_charge.js';

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
