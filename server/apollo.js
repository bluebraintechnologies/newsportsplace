import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const API_URI = `http://13.126.32.113:4000/graphql`

const apolloClient = new ApolloClient( {
    uri: API_URI,
    cache: new InMemoryCache()
} );

export default withApollo( apolloClient );
