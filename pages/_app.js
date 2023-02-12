import React from 'react';

import Layout from '../components/layout';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <main className='prose mx-auto max-w-4xl min-h-screen h-full p-4 sm:p-8 mt-16'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
};

export default App;
