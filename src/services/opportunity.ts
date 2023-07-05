import { mocksEnabled } from '.';
import { formatParams, rover } from '../api';
import { Photo } from '../types';

export const cameras = ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] as const;

export type OpportunityCamera = typeof cameras[number];

interface Photos {
  photos: Photo[];
}

interface Params {
  camera?: OpportunityCamera;
  page?: number;
  sol?: number;
}

export async function getOpportunityList({camera, page = 1, sol = 1000}: Params = {}) {
  if (mocksEnabled()) return getOpportunityMock();
  const {data} = await rover.get<Photos>(`opportunity/photos/?${formatParams({camera, page, sol})}`);
  return data;
}

async function getOpportunityMock(): Promise<Photos> {
  return {
    photos: [
      {
        id: 141044,
        sol: 1000,
        camera: {
          id: 16,
          name: 'NAVCAM',
          rover_id: 6,
          full_name: 'Navigation Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/1/n/1000/1N216958451EFF76ZFP1950L0M1-BR.JPG',
        earth_date: '2006-11-17',
        rover: {
          id: 6,
          name: 'Opportunity',
          landing_date: '2004-01-25',
          launch_date: '2003-07-07',
          status: 'complete',
        },
      },
      {
        id: 141045,
        sol: 1000,
        camera: {
          id: 16,
          name: 'NAVCAM',
          rover_id: 6,
          full_name: 'Navigation Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/1/n/1000/1N216958451EFF76ZFP1950R0M1-BR.JPG',
        earth_date: '2006-11-17',
        rover: {
          id: 6,
          name: 'Opportunity',
          landing_date: '2004-01-25',
          launch_date: '2003-07-07',
          status: 'complete',
        },
      },
      {
        id: 217448,
        sol: 1000,
        camera: {
          id: 17,
          name: 'PANCAM',
          rover_id: 6,
          full_name: 'Panoramic Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957338ESF76ZFP2600L8M1-BR.JPG',
        earth_date: '2006-11-17',
        rover: {
          id: 6,
          name: 'Opportunity',
          landing_date: '2004-01-25',
          launch_date: '2003-07-07',
          status: 'complete',
        },
      },
      {
        id: 217449,
        sol: 1000,
        camera: {
          id: 17,
          name: 'PANCAM',
          rover_id: 6,
          full_name: 'Panoramic Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957338ESF76ZFP2600R8M1-BR.JPG',
        earth_date: '2006-11-17',
        rover: {
          id: 6,
          name: 'Opportunity',
          landing_date: '2004-01-25',
          launch_date: '2003-07-07',
          status: 'complete',
        },
      },
      {
        id: 217450,
        sol: 1000,
        camera: {
          id: 17,
          name: 'PANCAM',
          rover_id: 6,
          full_name: 'Panoramic Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957358ESF76ZFP2619L8M1-BR.JPG',
        earth_date: '2006-11-17',
        rover: {
          id: 6,
          name: 'Opportunity',
          landing_date: '2004-01-25',
          launch_date: '2003-07-07',
          status: 'complete',
        },
      },
      {
        id: 217451,
        sol: 1000,
        camera: {
          id: 17,
          name: 'PANCAM',
          rover_id: 6,
          full_name: 'Panoramic Camera',
        },
        img_src: 'http://mars.nasa.gov/mer/gallery/all/1/p/1000/1P216957358ESF76ZFP2619R8M1-BR.JPG',
        earth_date: '2006-11-17',
        rover: {
          id: 6,
          name: 'Opportunity',
          landing_date: '2004-01-25',
          launch_date: '2003-07-07',
          status: 'complete',
        },
      },
    ],
  };
}
