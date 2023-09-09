import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { client } from 'services/apollo';
import { setLocale } from 'yup';
import { pt } from 'yup-locale-pt';
import { App } from './App';
import './index.css';

setLocale(pt);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
