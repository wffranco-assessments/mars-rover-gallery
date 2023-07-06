import React from 'react';

import FilterBar from '../components/FilterBar';
import GalleryWrapper from '../components/GalleryWrapper';
import Layout from '../components/Layout';

import { useOpportunityRover } from '../hooks/opportunity';
import { paths } from '../routes';

export default function Oportunity() {
  const {camera, cameras, infoKey, manifest, photos, page, setCamera, setInfoKey} = useOpportunityRover();

  return (
    <Layout className="flex flex-col items-center gap-8">
      <h1 className="text-xl">Opportunity Rover</h1>
      <FilterBar camera={camera} cameras={cameras} infoKey={infoKey} manifest={manifest} setCamera={setCamera} setInfoKey={setInfoKey} />
      <GalleryWrapper {...{page, photos}} path={paths.opportunity} />
    </Layout>
  );
}
