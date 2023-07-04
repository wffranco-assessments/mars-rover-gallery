import React from 'react';

import Paginator from './Paginator';
import Gallery from './Gallery';
import Loader from './Loader';

import { Photo } from '../types';

interface Props {
  page: number;
  path: string;
  photos?: Photo[];
}

export default function GalleryWrapper(props: Props) {
  const paginator = renderPaginator(props);
  return (
    <>
      {paginator}
      {renderGallery(props.photos)}
      {paginator}
    </>
  );
}

function renderGallery(photos?: Photo[]) {
  if (!photos) return <Loader />;
  if (!photos.length) return <>Nothing to Show...</>;
  return <Gallery photos={photos} />;
}

function renderPaginator({page, path, photos}: Props) {
  if (!(page > 1 || photos?.length === 25)) return undefined;
  return (
    <Paginator {...{
      prev: page > 1 ? `${path}/${page-1}` : '',
      page,
      next: photos?.length === 25 ? `${path}/${page+1}` : '',
    }} />
  );
}
