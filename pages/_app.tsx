import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Layout } from 'components/Layout';

const GlobalStyle = createGlobalStyle`
  body, html {
    background: black;
    color: white;

    margin: 0;

    font-family: 'Vollkorn', serif;
  }
`;

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />

    <Head>
      <title>who&apos;s kaic</title>

      <link
        href="https://fonts.googleapis.com/css2?family=Vollkorn&display=swap"
        rel="stylesheet"
      />
    </Head>

    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default CustomApp;
