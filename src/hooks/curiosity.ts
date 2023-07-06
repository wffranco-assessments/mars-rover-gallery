import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { rovers } from '../consts';
import { getManifestData } from '../services';
import { getCuriosityList, getCuriosityManifest } from '../services/curiosity';
import { Cameras, ManifestData, ManifestInfo, Photo, RoverHookResponse } from '../types';

type Camera = Cameras['Curiosity'];
type Response = RoverHookResponse<Camera>;

const cameras = rovers.Curiosity.Cameras;
let manifest_cache: ManifestData;

export function useCuriosityRover(): Response {
  const params = useParams();
  const [camera, setCamera] = useState<Camera|undefined>();
  const [infoKey, setInfoKey] = useState<ManifestInfo|undefined>();
  const [manifest, setManifest] = useState<ManifestData|undefined>();
  const [photos, setPhotos] = useState<Photo[]|undefined>();
  const [page, setPage] = useState(parseInt(params.page || '') || 1);
  const [sol, setSol] = useState(1000);

  useEffect(() => {
    setPage(parseInt(params.page || '') || 1);
  }, [params]);
  useEffect(() => {
    search({camera, page, sol});
  }, [camera, page, sol]);
  useEffect(() => {
    getManifest();
  }, []);
  useEffect(() => {
    setSol(infoKey?.sol || 0);
    setPage(1);
  }, [infoKey]);

  async function getManifest() {
    if (!manifest_cache) {
      const manifest = await getCuriosityManifest();
      manifest_cache = await getManifestData(manifest);
    }
    setManifest(manifest_cache);
  }

  async function search(params: Partial<Response>) {
    setPhotos(undefined);
    try {
      const photos = await getCuriosityList(params);
      setPhotos(photos);
    } catch {
      setPhotos([]);
    }
  }

  return {camera, cameras, infoKey, manifest, photos, page, search, setCamera, setInfoKey, setManifest, setPage, setSol, sol};
}
