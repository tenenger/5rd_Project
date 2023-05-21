import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, defaultTheme } from 'styles';

export const queryClient = new QueryClient();

const GlobalProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <RecoilRoot>{children}</RecoilRoot>
    </ThemeProvider>
  </QueryClientProvider>
);

export default GlobalProvider;
