import React from 'react';

import FilterBar from '../components/FilterBar';
import GalleryWrapper from '../components/GalleryWrapper';
import Layout from '../components/Layout';

import { paths } from '../routes';
import { useSpiritRover } from '../hooks/spirit';

export default function Spirit() {
  const {camera, cameras, infoKey, manifest, photos, page, setCamera, setInfoKey} = useSpiritRover();

  return (
    <Layout className="flex flex-col items-center gap-8">
      <h1 className="text-xl">Spirit Rover</h1>
      <FilterBar camera={camera} cameras={cameras} infoKey={infoKey} manifest={manifest} setCamera={setCamera} setInfoKey={setInfoKey} />
      <GalleryWrapper {...{page, photos}} path={paths.spirit} />
    </Layout>
  );
}
