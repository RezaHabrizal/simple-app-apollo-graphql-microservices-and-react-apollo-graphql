import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache(),
})

export default client
