import React from 'react';

import FilterBar from '../components/FilterBar';
import GalleryWrapper from '../components/GalleryWrapper';
import Layout from '../components/Layout';

import { useCuriosityRover } from '../hooks/curiosity';
import { paths } from '../routes';

export default function Curiosity() {
  const {camera, cameras, setCamera, photos, page} = useCuriosityRover();

  return (
    <Layout className="flex flex-col items-center gap-8">
      <h1 className="text-xl">Curiosity Rover</h1>
      <FilterBar {...{camera, cameras, setCamera}} />
      <GalleryWrapper {...{page, photos}} path={paths.curiosity} />
    </Layout>
  );
}
