import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  //   createHttpLink,
  //   split,
} from '@apollo/client';

// import { WebSocketLink } from '@apollo/client/link/ws';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: 'http://localhost:8000/graphql',
//   credentials: 'same-origin',
//   // credentials: 'include',
// });

// const wsLink = new WebSocketLink({
//   uri: 'ws://localhost:8000/subscriptions/',
//   options: {
//     reconnect: false,
//   },
// });

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink
// );

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  //   link: authLink.concat(splitLink),
  cache: new InMemoryCache({}),
  connectToDevTools: process.env.NODE_ENV === 'development',
});

export default client;
