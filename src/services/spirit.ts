import { mocksEnabled } from '.';
import { formatParams, rover } from '../api';
import { Photo } from '../types';

export const cameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] as const;

export type SpiritCamera = typeof cameras[number];

interface Photos {
  photos: Photo[];
}

interface Params {
  camera?: SpiritCamera;
  page?: number;
  sol?: number;
}

export async function getSpiritList({camera, page = 1, sol = 1000}: Params = {}) {
  if (mocksEnabled()) return getSpiritMock();
  const {data} = await rover.get<Photos>(`spirit/photos/?${formatParams({camera, page, sol})}`);
  return data;
}

async function getSpiritMock(): Promise<Photos> {
  return {
    photos: [
      {
        id: 301536,
        sol: 1000,
        camera: {
          id: 29,
          name: 'NAVCAM',
          rover_id: 7,
          full_name: 'Navigation Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215136972EDNAS00P1585L0M1-BR.JPG',
        earth_date: '2006-10-27',
        rover: {
          id: 7,
          name: 'Spirit',
          landing_date: '2004-01-04',
          launch_date: '2003-06-10',
          status: 'complete',
        },
      },
      {
        id: 301537,
        sol: 1000,
        camera: {
          id: 29,
          name: 'NAVCAM',
          rover_id: 7,
          full_name: 'Navigation Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137010EDNAS00P1585L0M1-BR.JPG',
        earth_date: '2006-10-27',
        rover: {
          id: 7,
          name: 'Spirit',
          landing_date: '2004-01-04',
          launch_date: '2003-06-10',
          status: 'complete',
        },
      },
      {
        id: 301538,
        sol: 1000,
        camera: {
          id: 29,
          name: 'NAVCAM',
          rover_id: 7,
          full_name: 'Navigation Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137048EDNAS00P1585L0M1-BR.JPG',
        earth_date: '2006-10-27',
        rover: {
          id: 7,
          name: 'Spirit',
          landing_date: '2004-01-04',
          launch_date: '2003-06-10',
          status: 'complete',
        },
      },
      {
        id: 301539,
        sol: 1000,
        camera: {
          id: 29,
          name: 'NAVCAM',
          rover_id: 7,
          full_name: 'Navigation Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/2/n/1000/2N215137086EDNAS00P1585L0M1-BR.JPG',
        earth_date: '2006-10-27',
        rover: {
          id: 7,
          name: 'Spirit',
          landing_date: '2004-01-04',
          launch_date: '2003-06-10',
          status: 'complete',
        },
      },
      {
        id: 341822,
        sol: 1000,
        camera: {
          id: 30,
          name: 'PANCAM',
          rover_id: 7,
          full_name: 'Panoramic Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/2/p/1000/2P215138639ESFAS00P2600L8M1-BR.JPG',
        earth_date: '2006-10-27',
        rover: {
          id: 7,
          name: 'Spirit',
          landing_date: '2004-01-04',
          launch_date: '2003-06-10',
          status: 'complete',
        },
      },
      {
        id: 341823,
        sol: 1000,
        camera: {
          id: 30,
          name: 'PANCAM',
          rover_id: 7,
          full_name: 'Panoramic Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/2/p/1000/2P215138639ESFAS00P2600R8M1-BR.JPG',
        earth_date: '2006-10-27',
        rover: {
          id: 7,
          name: 'Spirit',
          landing_date: '2004-01-04',
          launch_date: '2003-06-10',
          status: 'complete',
        },
      },
    ],
  };
}
