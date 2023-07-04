import React from 'react';

import { Photo } from '../types';

interface Props {
  photo: Photo;
}

export default function Card({photo}: Props) {
  return (
    <li className="relative w-full sm:w-44 aspect-square">
      <div className="absolute w-full aspect-square bg-contain border rounded-md dark:border-gray-500" style={{backgroundImage: `url(${photo.img_src})`}}>
      </div>
    </li>
  );
}
