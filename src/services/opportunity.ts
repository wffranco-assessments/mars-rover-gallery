import { APINasaParams, formatParams, nasa } from '../api';
import { Cameras, Manifest, ManifestResponse, Photo, PhotosResponse } from '../types';
import { getMock, mocksEnabled } from '.';

type Camera = Cameras['Opportunity'];

export async function getOpportunityList({camera, page = 1, sol = 1000}: APINasaParams<Camera> = {}): Promise<Photo<Camera>[]> {
  if (mocksEnabled()) return getMock('OpportunityPhotos');
  const {data} = await nasa.get<PhotosResponse<Camera>>(`opportunity/photos/?${formatParams({camera, page, sol})}`);
  return data.photos;
}

export async function getOpportunityManifest(): Promise<Manifest<Camera>> {
  if (mocksEnabled()) return getMock('OpportunityManifest');
  const {data} = await nasa.get<ManifestResponse<Camera>>('manifests/opportunity');
  return data.photo_manifest;
}
