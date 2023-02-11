import React from 'react';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  return (
    <main className='prose flex place-content-center mx-auto max-w-7xl min-h-screen h-full p-4 sm:p-8 mt-16'>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
