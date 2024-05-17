import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GRAPHCMS_PERMANENTAUTH_TOKEN, GRAPHCMS_URL } from "../constants/constants";

const httpLink = createHttpLink({
  uri: GRAPHCMS_URL
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;