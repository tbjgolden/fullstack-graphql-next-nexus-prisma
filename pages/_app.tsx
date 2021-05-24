import React from 'react';
import NextApp, { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `/api/graphql`,
  cache: new InMemoryCache()
});

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
)
export default App
