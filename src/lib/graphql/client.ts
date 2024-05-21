import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GRAPHCMS_PERMANENTAUTH_TOKEN, GRAPHCMS_URL } from "../constants/constants";


const httpLink = createHttpLink({
  uri: GRAPHCMS_URL
});

const client = new ApolloClient({
  link: httpLink,
  headers: {
    authorization: `Bearer ${GRAPHCMS_PERMANENTAUTH_TOKEN}`
  },
  cache: new InMemoryCache()
});

export default client;