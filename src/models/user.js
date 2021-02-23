import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';
import getUserEstates from '../resolvers/get_user_estates.js';
import EstateType from './estate.js';

// UserType doesn't contain password, but data source will need to.
const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents User',
  fields: () => ({
    id: { type: GraphQLNonNull(GraphQLInt) },
    name: { type: GraphQLNonNull(GraphQLString) },
    email: { type: GraphQLNonNull(GraphQLString) },
    estates: {
      type: GraphQLList(EstateType),
      description: 'Estates assigned to user',
      resolve: getUserEstates,
    },
  }),
});

export { UserType as default };
