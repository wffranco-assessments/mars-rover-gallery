import { mocksEnabled } from '.';
import { formatParams, rover } from '../api';
import { Photo } from '../types';

export const cameras = ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'] as const;

export type CuriosityCamera = typeof cameras[number];

interface Photos {
  photos: Photo[];
}

interface Params {
  camera?: CuriosityCamera;
  page?: number;
  sol?: number;
}

export async function getCuriosityList({camera, page = 1, sol = 1000}: Params = {}) {
  if (mocksEnabled()) return getCuriosityMock();
  const {data} = await rover.get<Photos>(`curiosity/photos/?${formatParams({camera, page, sol})}`);
  return data;
}

async function getCuriosityMock(): Promise<Photos> {
  return {
    photos: [
      {
        id: 102693,
        sol: 1000,
        camera: {
          id: 20,
          name: 'FHAZ',
          rover_id: 5,
          full_name: 'Front Hazard Avoidance Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 102694,
        sol: 1000,
        camera: {
          id: 20,
          name: 'FHAZ',
          rover_id: 5,
          full_name: 'Front Hazard Avoidance Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 102850,
        sol: 1000,
        camera: {
          id: 21,
          name: 'RHAZ',
          rover_id: 5,
          full_name: 'Rear Hazard Avoidance Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 102851,
        sol: 1000,
        camera: {
          id: 21,
          name: 'RHAZ',
          rover_id: 5,
          full_name: 'Rear Hazard Avoidance Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424905,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424906,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631300305227E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424907,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631290503689E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424908,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631290305226E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424909,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631280503688E0B_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424910,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631280305225E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424911,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631270503687E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424912,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631270305224E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424913,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631260503686E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424914,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631260305223E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424915,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631250503685E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424916,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631250305222E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424917,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631240503684E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424918,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631240305221E03_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424919,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631230503683E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424920,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631230305220E02_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424921,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631220503682E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424922,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631220305219E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424923,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631210503681E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424924,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000ML0044631210305218E01_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
      {
        id: 424925,
        sol: 1000,
        camera: {
          id: 22,
          name: 'MAST',
          rover_id: 5,
          full_name: 'Mast Camera',
        },
        img_src: 'http://mars.jpl.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631200503680E0C_DXXX.jpg',
        earth_date: '2015-05-30',
        rover: {
          id: 5,
          name: 'Curiosity',
          landing_date: '2012-08-06',
          launch_date: '2011-11-26',
          status: 'active',
        },
      },
    ],
  };
}
