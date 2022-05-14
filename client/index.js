import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';
import App from './components/App';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
    credentials: 'same-origin',
});

const Main = () => (
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);

const root = createRoot(document.getElementById('root'));
root.render(<Main />);
