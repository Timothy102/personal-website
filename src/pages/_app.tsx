import '../styles/fonts.css';
import '../styles/globals.css';
import Layout from '../app/layout';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;