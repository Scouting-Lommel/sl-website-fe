import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function getStaticProps() {
    const client = new ApolloClient({
        uri:`${process.env.REACT_APP_BACKEND_URL}/graphql`,
        cache: new InMemoryCache()
    })

    const { data } = await client.query({
        query: gql``
    })

    return {
        props:{
            messages: data.messages
        }
    }
}