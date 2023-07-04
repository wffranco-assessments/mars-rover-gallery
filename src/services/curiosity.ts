import { getMock, mocksEnabled } from '.';
import { APINasaParams, formatParams, nasa } from '../api';
import { Cameras, Manifest, ManifestResponse, Photo, PhotosResponse } from '../types';

type Camera = Cameras['Curiosity'];

export async function getCuriosityList({camera, page = 1, sol = 1000}: APINasaParams<Camera> = {}): Promise<Photo<Camera>[]> {
  if (mocksEnabled()) return getMock('CuriosityPhotos');
  const {data} = await nasa.get<PhotosResponse<Camera>>(`rovers/curiosity/photos/?${formatParams({camera, page, sol})}`);
  return data.photos;
}

export async function getCuriosityManifest(): Promise<Manifest<Camera>> {
  if (mocksEnabled()) return getMock('CuriosityManifest');
  const {data} = await nasa.get<ManifestResponse<Camera>>('manifests/curiosity');
  return data.photo_manifest;
}
