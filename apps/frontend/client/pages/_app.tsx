import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import './styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FrontendClient</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
