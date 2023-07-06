import { APINasaParams, formatParams, nasa } from '../api';
import { ManifestMock, PhotoMock, getMock, mocksEnabled } from './mocks';
import { Cameras, Manifest, ManifestResponse, Photo, PhotosResponse } from '../types';
import { cached } from '../utils/cache';

type Camera = Cameras[Name];
type Name = 'Spirit';

export async function getSpiritList({camera, page = 1, sol = 1000}: APINasaParams<Camera> = {}) {
  const url = `rovers/curiosity/photos/?${formatParams({camera, page, sol})}`;
  return cached(url, async(): Promise<Photo<Camera>[]> => {
    if (mocksEnabled()) return getMock<PhotoMock<Name>>('SpiritPhotos');
    const {data} = await nasa.get<PhotosResponse<Camera>>(url);
    return data.photos;
  });
}

export async function getSpiritManifest() {
  const url = 'manifests/curiosity';
  return cached(url, async(): Promise<Manifest<Camera>> => {
    if (mocksEnabled()) return getMock<ManifestMock<Name>>('SpiritManifest');
    const {data} = await nasa.get<ManifestResponse<Camera>>(url);
    return data.photo_manifest;
  });
}
