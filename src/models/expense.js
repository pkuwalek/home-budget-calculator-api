import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import ChargeType from './charges/charge.js';
import getExpenseCharges from '../resolvers/get_expense_charges.js';

const ExpenseType = new GraphQLObjectType({
  name: 'Expense',
  description: 'This represents Expense',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    estateId: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    charges: {
      type: GraphQLList(ChargeType),
      resolve: getExpenseCharges,
    },
  }),
});

export { ExpenseType as default };
