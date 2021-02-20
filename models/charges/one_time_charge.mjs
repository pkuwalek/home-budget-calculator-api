import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

const OneTimeChargeType = new GraphQLObjectType({
  name: 'OneTimeCharge',
  description: 'This represents one time charge',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    expenseId: { type: GraphQLNonNull(GraphQLInt) },
    fee: { type: GraphQLNonNull(GraphQLFloat) },
    dateOfCharge: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export { OneTimeChargeType as default };
