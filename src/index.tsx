import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ContactsProvider } from './contexts/ContactsContext';

const client = new ApolloClient({
  uri: 'https://wpe-hiring.tokopedia.net/graphql', // Ganti dengan URL GraphQL server Anda
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <ApolloProvider client={client}>
    <ContactsProvider client={client}>
    <App />
    </ContactsProvider>
  </ApolloProvider>
  </BrowserRouter>
);
reportWebVitals();
