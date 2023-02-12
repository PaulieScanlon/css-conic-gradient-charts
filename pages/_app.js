import React, { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/layout';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
  const seoTitle = 'CSS conic-gradient Charts';
  const seoDescription = 'Create Donut or Pie Charts using the CSS';
  const seoImage = 'open-graph-image.jpg';

  return (
    <Fragment>
      <Head>
        <title>{seoTitle}</title>
        <link rel='canonical' href={cdnUrl} />
        <meta name='robots' content='max-snippet:-1' />

        {/* Primary Meta Tags */}
        <meta name='title' content={seoTitle} />
        <meta name='description' content={seoDescription} />
        <meta name='image' content={`${cdnUrl}/${seoImage}`} />

        {/* Open Graph / Facebook  */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={cdnUrl} />
        <meta property='og:title' content={seoTitle} />
        <meta property='og:description' content={seoDescription} />
        <meta property='og:image' content={`${cdnUrl}/${seoImage}`} />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:url' content={cdnUrl} />
        <meta name='twitter:title' content={seoTitle} />
        <meta name='twitter:description' content={seoDescription} />
        <meta name='twitter:image' content={`${cdnUrl}/${seoImage}`} />

        {/* favicon */}
        <link rel='icon' type='image/png' sizes='16x16' href={`${cdnUrl}/favicon-16x16.png`} data-react-helmet='true' />
        <link rel='icon' type='image/png' sizes='32x32' href={`${cdnUrl}/favicon-32x32.png`} data-react-helmet='true' />
      </Head>
      <main className='prose mx-auto max-w-4xl min-h-screen h-full p-4 sm:p-8 mt-16'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </Fragment>
  );
};

export default App;
