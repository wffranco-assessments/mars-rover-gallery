import React from 'react';

import Card from './Card';

import { Photo } from '../types';

interface Props extends React.PropsWithChildren {
  photos: Photo[];
}

export default function Gallery({photos}: Props) {
  return (
    <ul className="max-w-screen-xl flex flex-wrap justify-center gap-4">
      {photos?.map(photo => <Card key={photo.id} photo={photo} />)}
    </ul>
  );
}
