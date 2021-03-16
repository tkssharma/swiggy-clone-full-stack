import { ApolloClient, InMemoryCache } from '@apollo/client';
import { graphQLApiUri } from '../../config/endpoints';

/**
 * GraphQLClient : Returns instance of apollo client.
 * @param {*} uri [URL of service ]
 * @param {*} headers [headers to be passed to service. like security token]
 */
const GraphQLClient = (uri = graphQLApiUri) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri,
  });

  return client;
};

export default GraphQLClient;
