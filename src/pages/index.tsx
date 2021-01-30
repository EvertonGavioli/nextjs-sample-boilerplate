import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Next App</title>
      </Head>

      <main>
        <Button>MyButton</Button>
      </main>
    </>
  );
};

export default Home;
