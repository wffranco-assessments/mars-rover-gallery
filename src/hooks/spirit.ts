import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { rovers } from '../consts';
import { getSpiritList } from '../services/spirit';
import { Cameras, Photo, RoverHookResponse } from '../types';

type Camera = Cameras['Spirit'];
type Response = RoverHookResponse<Camera>;

const cameras = rovers.Spirit.Cameras;

export function useSpiritRover(): Response {
  const params = useParams();
  const [camera, setCamera] = useState<Camera|undefined>();
  const [photos, setPhotos] = useState<Photo[]|undefined>(undefined);
  const [page, setPage] = useState(parseInt(params.page || '') || 1);
  const [sol, setSol] = useState(1000);

  useEffect(() => {
    setPage(parseInt(params.page || '') || 1);
  }, [params]);
  useEffect(() => {
    search({camera, page, sol});
  }, [camera, page, sol]);

  async function search({camera, page = 1, sol = 1000}: Partial<Response> = {}) {
    setPhotos(undefined);
    try {
      const photos = await getSpiritList({camera, page, sol});
      setPhotos(photos);
    } catch {
      setPhotos([]);
    }
  }

  return {camera, cameras, photos, page, search, setCamera, setPage, setSol, sol};
}
