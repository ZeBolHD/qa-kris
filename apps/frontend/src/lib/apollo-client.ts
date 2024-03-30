import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "./consts";

const createApolloClient = () => {
  return new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
  });
};

const apolloClient = createApolloClient();

export default apolloClient;
