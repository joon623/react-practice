import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'

const lightTheme = `
  --text: black;
  --background: white;
  --hello: black;
`;
const darkTheme = `
  --color-text: white;
  --color-background: black;
  --hello: purple;
`;

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider
            disableTransitionOnChange={true}
            defaultTheme="system"
            attribute="class"
        >
            <style global jsx>{`
              body {
                ${lightTheme};
              }

              @media (prefers-color-scheme: dark) {
                body {
                  ${darkTheme}
                }
              }

              body[data-theme='light'] {
                ${lightTheme};
              }

              body[data-theme='dark'] {
                ${darkTheme};
              }

            `}

            </style>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
