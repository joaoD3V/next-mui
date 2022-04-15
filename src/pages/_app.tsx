import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeContextProvider } from 'contexts/ModeContext';
import '../themes/reset.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Head>
        <title>Next MUI</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default App;
