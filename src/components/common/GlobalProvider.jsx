import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from '../../styles/global.style';
import { RecoilRoot } from 'recoil';

export const queryClient = new QueryClient();

const GlobalProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
