import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { rovers } from '../consts';
import { getSpiritList, getSpiritManifest } from '../services/spirit';
import { Cameras, ManifestData, ManifestInfo, Photo, RoverHookResponse } from '../types';
import { getManifestData } from '../services';

type Camera = Cameras['Spirit'];
type Response = RoverHookResponse<Camera>;

const cameras = rovers.Spirit.Cameras;
let manifest_cache: ManifestData;

export function useSpiritRover(): Response {
  const params = useParams();
  const [camera, setCamera] = useState<Camera|undefined>();
  const [infoKey, setInfoKey] = useState<ManifestInfo|undefined>();
  const [manifest, setManifest] = useState<ManifestData|undefined>();
  const [photos, setPhotos] = useState<Photo[]|undefined>(undefined);
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
    setManifest(undefined);
    if (!manifest_cache) {
      const manifest = await getSpiritManifest();
      manifest_cache = await getManifestData(manifest);
    }
    setManifest(manifest_cache);
  }

  async function search({camera, page = 1, sol = 1000}: Partial<Response> = {}) {
    setPhotos(undefined);
    try {
      const photos = await getSpiritList({camera, page, sol});
      setPhotos(photos);
    } catch {
      setPhotos([]);
    }
  }

  return {camera, cameras, infoKey, manifest, photos, page, search, setCamera, setInfoKey, setManifest, setPage, setSol, sol};
}
