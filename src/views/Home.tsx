import React from 'react';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout className="flex flex-col items-center gap-8">
      <h1 className="text-2xl">Mars Rover Pictures</h1>
      <p className="text-lg text-center">
        Welcome to Mars Rover pictures galery!
      </p>
      <p className="text-center">
        You can find here a list of rovers, with thousands of pictures
        of everyone of them.
      </p>
    </Layout>
  );
}
