import {GraphQLObjectType, GraphQLSchema} from 'graphql';

import {nodeField} from './nodes.js';
import {allUsers, UserQuery} from './queries/UserQuery';


const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: UserQuery,
    // test: allUsers,
    // node: nodeField,
  },
});

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addTodo: AddTodoMutation,
//     changeTodoStatus: ChangeTodoStatusMutation,
//     markAllTodos: MarkAllTodosMutation,
//     removeCompletedTodos: RemoveCompletedTodosMutation,
//     removeTodo: RemoveTodoMutation,
//     renameTodo: RenameTodoMutation,
//   },
// });

export const schema = new GraphQLSchema({
  query: Query,
  // mutation: Mutation,
});
