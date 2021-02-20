import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

const RecurrentChargeType = new GraphQLObjectType({
  name: 'RecurrentCharge',
  description: 'This represents one time charge',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    expenseId: { type: GraphQLNonNull(GraphQLInt) },
    fee: { type: GraphQLNonNull(GraphQLFloat) },
    startDate: { type: GraphQLNonNull(GraphQLString) },
    endDate: { type: GraphQLString },
  }),
});

export { RecurrentChargeType as default };
