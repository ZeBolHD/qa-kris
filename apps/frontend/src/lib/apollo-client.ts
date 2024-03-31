import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "./consts";

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore"
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all"
    }
  }
});

export default apolloClient;
