import * as React from 'react'
import Head from 'next/head'
import {AppProps} from "next/app";
import {extendTheme, NativeBaseProvider} from 'native-base';


const LinearGradient = require("expo-linear-gradient").LinearGradient;

const config = {
    dependencies: {
        "linear-gradient": LinearGradient
    }
};

const newColorTheme = {
    brand: {
        900: '#8287af',
        800: '#7c83db',
        700: '#b3bef6',
    },
};
const theme = extendTheme({colors: newColorTheme});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <NativeBaseProvider theme={theme} config={config}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Component {...pageProps} />
        </NativeBaseProvider>
    )
}

export default MyApp
