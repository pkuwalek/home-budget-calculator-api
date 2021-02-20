import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLInt,
} from 'graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import UserType from './models/user.mjs';
import getUser from './resolvers/get_user.mjs';
import getUsers from './resolvers/get_users.mjs';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: 'List of users',
      resolve: getUsers,
    },
    user: {
      type: UserType,
      description: 'Get user by Id',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: getUser,
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(3000);
console.log('GraphQL server listening at localhost:3000/graphql');
