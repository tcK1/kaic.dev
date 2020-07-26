import React from 'react';
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const documentInitialProps = await Document.getInitialProps(ctx);

    const finalProps = {
      ...documentInitialProps,
    };

    const sheet = new ServerStyleSheet();

    try {
      const originalRenderPage = ctx.renderPage;

      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      finalProps.styles = (
        <>
          {finalProps.styles}
          {sheet.getStyleElement()}
        </>
      );
    } finally {
      sheet.seal();
    }

    return finalProps;
  }
}
