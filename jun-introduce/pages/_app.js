import "../styles/globals.css";

// 1. Create a client engine instance
// const engine = new Styletron();

function MyApp({ Component, pageProps }) {
  return (
    // <StyletronProvider value={engine}>
    <Component {...pageProps} />
    // </StyletronProvider>
  );
}

export default MyApp;
