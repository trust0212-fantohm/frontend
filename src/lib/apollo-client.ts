import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GRAPHQL_URL } from '@/config/env'

const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
})

export default apolloClient
