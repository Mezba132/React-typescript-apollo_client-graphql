import React from 'react'
import {
        ApolloClient,
        InMemoryCache,
        ApolloProvider,
        HttpLink,
        from
} from '@apollo/client'
import { onError } from "@apollo/client/link/error";
import GetUsers from "./Components/GetUsers";
import GetUser from "./Components/GetUser";
import CreateUser from "./Components/CreateUser";

const errorLink = onError(({ graphqlErrors, networkErrors}) => {
    if(graphqlErrors) {
        graphqlErrors.map(({message, location, path }) => {
            alert(`Graphql Error ${message}`)
        })
    }
})

const link = from([
        errorLink,
        new HttpLink({ uri : "http://localhost:5000/graphql" })
])

const client = new ApolloClient({
    cache : new InMemoryCache(),
    link : link
})

const App = () => {

  return (
    <ApolloProvider client={client}>
        <GetUsers/>
        <GetUser/>
        <CreateUser/>
    </ApolloProvider>
  );
}

export default App;
