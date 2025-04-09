import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${import.meta.env.VITE_API_URL}/graphql`, // Replace with your API URL
  }),
  cache: new InMemoryCache(),
});

export default apolloClient;
