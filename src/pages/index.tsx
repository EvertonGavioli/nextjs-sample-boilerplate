import React from 'react';
import Head from 'next/head';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>My Next App - Task#2</title>
      </Head>

      <main>
        <h1>NextJS App</h1>
        <Button>MyButton</Button>
      </main>
    </>
  );
};

export default Home;
