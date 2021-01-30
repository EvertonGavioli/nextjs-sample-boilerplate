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
        <h1>NextJS App - Task#2</h1>
        <Button>MyButton</Button>
      </main>
    </>
  );
};

export default Home;
