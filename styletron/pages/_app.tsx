import { AppProps } from 'next/app';
import { styletron } from '../styletron';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme } from 'baseui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import '../styles/globals.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <StyletronProvider value={styletron}>
          <BaseProvider theme={LightTheme}>
            <Component {...pageProps} />
          </BaseProvider>
        </StyletronProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
