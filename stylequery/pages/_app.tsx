import {AppProps} from 'next/app';
import {styletron} from '../styletron';
import {Provider as StyletronProvider} from 'styletron-react';
import {BaseProvider, LightTheme} from 'baseui';
import {dehydrate, Hydrate, QueryClient, QueryClientProvider} from 'react-query';
import {RecoilRoot} from 'recoil';
import '../styles/globals.css';

const queryClient = new QueryClient();
const dehydratedState = dehydrate(queryClient)

function MyApp({Component, pageProps}: AppProps) {
    return (
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={dehydratedState}>
                    <StyletronProvider value={styletron}>
                        <BaseProvider theme={LightTheme}>
                            <Component {...pageProps} />
                        </BaseProvider>
                    </StyletronProvider>
                </Hydrate>
            </QueryClientProvider>
        </RecoilRoot>
    );
}

export default MyApp;
