import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl7falnxn6r2t01ul9irqhscu/master',
  cache: new InMemoryCache(),
})
