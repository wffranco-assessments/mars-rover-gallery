import { getMock, mocksEnabled } from '.';
import { APINasaParams, formatParams, nasa } from '../api';
import { Cameras, Manifest, ManifestResponse, Photo, PhotosResponse } from '../types';

type Camera = Cameras['Spirit'];

export async function getSpiritList({camera, page = 1, sol = 1000}: APINasaParams<Camera> = {}): Promise<Photo<Camera>[]> {
  if (mocksEnabled()) return getMock('SpiritPhotos');
  const {data} = await nasa.get<PhotosResponse<Camera>>(`rovers/spirit/photos/?${formatParams({camera, page, sol})}`);
  return data.photos;
}

export async function getSpiritManifest(): Promise<Manifest<Camera>> {
  if (mocksEnabled()) return getMock('SpiritManifest');
  const {data} = await nasa.get<ManifestResponse<Camera>>('manifests/spirit');
  return data.photo_manifest;
}
