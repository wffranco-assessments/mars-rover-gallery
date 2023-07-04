import { Cameras, Manifest, Photo } from '../types';

export interface Mocks {
  CuriosityManifest: Manifest<Cameras['Curiosity']>;
  CuriosityPhotos: Photo<Cameras['Curiosity']>[];
  OpportunityManifest: Manifest<Cameras['Opportunity']>;
  OpportunityPhotos: Photo<Cameras['Opportunity']>[];
  SpiritManifest: Manifest<Cameras['Spirit']>;
  SpiritPhotos: Photo<Cameras['Spirit']>[];
}

export const mocks: Mocks = {
  CuriosityManifest: {
    name: 'Curiosity',
    landing_date: '2012-08-06',
    launch_date: '2011-11-26',
    status: 'active',
    max_sol: 3876,
    max_date: '2023-07-02',
    total_photos: 661395,
    photos: [
      {
        sol: 0,
        earth_date: '2012-08-06',
        total_photos: 3702,
        cameras: ['CHEMCAM', 'FHAZ', 'MARDI', 'RHAZ'],
      },
      {
        sol: 1,
        earth_date: '2012-08-07',
        total_photos: 16,
        cameras: ['MAHLI', 'MAST', 'NAVCAM'],
      },
      {
        sol: 2,
        earth_date: '2012-08-08',
        total_photos: 74,
        cameras: ['NAVCAM'],
      },
      {
        sol: 3,
        earth_date: '2012-08-09',
        total_photos: 338,
        cameras: ['MAST'],
      },
    ],
  },
  CuriosityPhotos: [
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
  OpportunityManifest: {
    name: 'Opportunity',
    landing_date: '2004-01-25',
    launch_date: '2003-07-07',
    status: 'complete',
    max_sol: 5111,
    max_date: '2018-06-11',
    total_photos: 198439,
    photos: [
      {
        sol: 1,
        earth_date: '2004-01-26',
        total_photos: 95,
        cameras: ['ENTRY', 'FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 2,
        earth_date: '2004-01-27',
        total_photos: 280,
        cameras: ['MINITES', 'NAVCAM', 'PANCAM'],
      },
      {
        sol: 3,
        earth_date: '2004-01-28',
        total_photos: 321,
        cameras: ['NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 4,
        earth_date: '2004-01-29',
        total_photos: 274,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 5,
        earth_date: '2004-01-30',
        total_photos: 97,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
    ],
  },
  OpportunityPhotos: [
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
  SpiritManifest: {
    name: 'Spirit',
    landing_date: '2004-01-04',
    launch_date: '2003-06-10',
    status: 'complete',
    max_sol: 2208,
    max_date: '2010-03-21',
    total_photos: 124550,
    photos: [
      {
        sol: 1,
        earth_date: '2004-01-05',
        total_photos: 77,
        cameras: ['ENTRY', 'FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 2,
        earth_date: '2004-01-06',
        total_photos: 125,
        cameras: ['MINITES', 'NAVCAM', 'PANCAM'],
      },
      {
        sol: 3,
        earth_date: '2004-01-07',
        total_photos: 125,
        cameras: ['NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 4,
        earth_date: '2004-01-08',
        total_photos: 143,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 5,
        earth_date: '2004-01-09',
        total_photos: 353,
        cameras: ['NAVCAM', 'PANCAM'],
      },
      {
        sol: 6,
        earth_date: '2004-01-10',
        total_photos: 346,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 7,
        earth_date: '2004-01-11',
        total_photos: 137,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 8,
        earth_date: '2004-01-12',
        total_photos: 182,
        cameras: ['FHAZ', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 9,
        earth_date: '2004-01-13',
        total_photos: 353,
        cameras: ['NAVCAM', 'PANCAM'],
      },
      {
        sol: 10,
        earth_date: '2004-01-14',
        total_photos: 186,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 11,
        earth_date: '2004-01-15',
        total_photos: 196,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 12,
        earth_date: '2004-01-16',
        total_photos: 185,
        cameras: ['FHAZ', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 13,
        earth_date: '2004-01-17',
        total_photos: 256,
        cameras: ['FHAZ', 'MINITES', 'NAVCAM', 'PANCAM'],
      },
      {
        sol: 14,
        earth_date: '2004-01-18',
        total_photos: 152,
        cameras: ['FHAZ', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 15,
        earth_date: '2004-01-19',
        total_photos: 131,
        cameras: ['FHAZ', 'MINITES', 'NAVCAM', 'PANCAM', 'RHAZ'],
      },
      {
        sol: 16,
        earth_date: '2004-01-20',
        total_photos: 120,
        cameras: ['NAVCAM', 'PANCAM'],
      },
      {
        sol: 17,
        earth_date: '2004-01-21',
        total_photos: 23,
        cameras: ['FHAZ', 'MINITES', 'PANCAM'],
      },
      {
        sol: 18,
        earth_date: '2004-01-22',
        total_photos: 2,
        cameras: ['FHAZ'],
      },
    ],
  },
  SpiritPhotos: [
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

