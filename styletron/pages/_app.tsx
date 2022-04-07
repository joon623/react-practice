import {AppProps} from "next/app"
import {styletron} from "../styletron"
import {Provider as StyletronProvider} from 'styletron-react'
import '../styles/globals.css'


function MyApp({Component, pageProps}: AppProps) {
    return (
        <StyletronProvider value={styletron}>
            <Component {...pageProps} />
        </StyletronProvider>
    )
}

export default MyApp
