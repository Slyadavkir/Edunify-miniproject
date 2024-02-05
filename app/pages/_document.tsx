// app/pages/
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add any additional meta tags, stylesheets, or other head elements here */}
          <meta name="description" content="Your website description" />
          {/* Example: External stylesheet */}
          <link rel="stylesheet" href="https://example.com/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
