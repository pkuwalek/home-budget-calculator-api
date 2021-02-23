import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import MeasurementType from './mesurement.js';

const UseChargeType = new GraphQLObjectType({
  name: 'UseCharge',
  description: 'This represents one time charge',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    expenseId: { type: GraphQLNonNull(GraphQLInt) },
    fee: { type: GraphQLNonNull(GraphQLFloat) },
    unitFee: { type: GraphQLNonNull(GraphQLFloat) },
    startDate: { type: GraphQLNonNull(GraphQLString) },
    endDate: { type: GraphQLString },
    measurements: { type: GraphQLList(MeasurementType) },
  }),
});

export { UseChargeType as default };
