import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { F } from '../components/F';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to next-app!</title>
      </Head>
      <main className="app">
        <F />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
