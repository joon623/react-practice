import {AppProps} from "next/app"
import {styletron} from "../styletron"
import {Provider as StyletronProvider} from 'styletron-react'
import {BaseProvider, LightTheme} from "baseui";
import '../styles/globals.css'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function MyApp({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <StyletronProvider value={styletron}>
                <BaseProvider theme={LightTheme}>
                    <Component {...pageProps} />
                </BaseProvider>
            </StyletronProvider>
        </QueryClientProvider>
    )
}

export default MyApp
