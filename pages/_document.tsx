import React from 'react';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    let finalProps = {} as DocumentInitialProps;

    const sheet = new ServerStyleSheet();

    try {
      const originalRenderPage = ctx.renderPage;

      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      finalProps = await Document.getInitialProps(ctx);

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
