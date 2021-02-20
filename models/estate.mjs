import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLBoolean,
} from 'graphql';
import getEstateExpenses from '../resolvers/get_estate_expanses.mjs';
import ExpenseType from './expense.mjs';

const EstateType = new GraphQLObjectType({
  name: 'Estate',
  description: 'This represents Estate',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    userId: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    isRented: { type: GraphQLBoolean },
    city: { type: GraphQLString },
    peopleCount: { type: GraphQLInt },
    sizeM2: { type: GraphQLInt },
    expenses: {
      type: GraphQLList(ExpenseType),
      description: 'Expenses assigned to estate',
      resolve: getEstateExpenses,
    },
  }),
});

export { EstateType as default };
