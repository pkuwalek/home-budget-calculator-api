import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLString,
} from 'graphql';

const MeasurementType = new GraphQLObjectType({
  name: 'Measurement',
  description: 'Meter value of use for a date',
  fields: () => ({
    RecurrentChargeId: { type: GraphQLNonNull(GraphQLInt) },
    meterValue: { type: GraphQLNonNull(GraphQLFloat) },
    measureDate: { type: GraphQLNonNull(GraphQLString) },
  }),
});

export { MeasurementType as default };
