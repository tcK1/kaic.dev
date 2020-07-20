import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Head from 'next/head';
import { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body, html {
    background: black;
    color: white;

    margin: 0;
  }
`;

export default ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />

    <Head>
      <title>who&apos;s kaic</title>
    </Head>

    <Component {...pageProps} />
  </>
);
