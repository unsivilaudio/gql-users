import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import App from './components/App';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const Main = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

const root = createRoot(document.getElementById('root'));
root.render(<Main />);
