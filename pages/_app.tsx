import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Head from 'next/head';
import { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  body, html {
    background: black;
    color: white;

    margin: 0;

    font-family: 'Vollkorn', serif;
    font-size: 18px;
  }
`;

export default ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />

    <Head>
      <title>who&apos;s kaic</title>

      <link
        href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Component {...pageProps} />
  </>
);
