import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import configureStore from './redux/store/store';
import GlobalStyle from './global.style';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <Provider store={configureStore}>
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
