import '../styles/globals.css'
import type {AppProps} from 'next/app'
import "./index.css";
import {ThemeProvider} from 'next-themes'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider
            disableTransitionOnChange={true}
            defaultTheme="system"
            attribute="class"
            // enableSystem={true}
            // defaultTheme="system"
            // attribute='data-theme'
        >
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
