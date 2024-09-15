import { Global } from '@emotion/react';
import globalStyles from '@styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Baby Shower | Bindu</title>
        <meta name="description" content="You are invited" />
      </Head>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}
