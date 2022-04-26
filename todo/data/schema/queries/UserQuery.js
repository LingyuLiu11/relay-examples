// @flow
/* graphql-relay doesn't export types, and isn't in flow-typed.  This gets too messy */
/* eslint flowtype/require-return-type: 'off' */

import {GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import {GraphQLUser} from '../nodes';
import {User, getUserOrThrow} from '../../database';

type Input = {
  +id: string,
};

const UserQuery = {
  type: GraphQLUser,
  args: {
    id: {type: GraphQLString},
  },
  resolve: (root: {}, {id}: Input): User => getUserOrThrow(id),
};

// const allUsers = new GraphQLObjectType({
//   type: new GraphQLList(User),
//   resolve(parent, args) {
//     return User.find({});
//   }
// })

export {UserQuery};
