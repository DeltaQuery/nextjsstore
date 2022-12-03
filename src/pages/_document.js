import Document from "next/document"
import Head from "next/head";
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
              />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}