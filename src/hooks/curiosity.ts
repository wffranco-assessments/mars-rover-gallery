import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCuriosityList } from '../services/curiosity';
import { Cameras, Photo, RoverHookResponse } from '../types';
import { rovers } from '../consts';

type Camera = Cameras['Curiosity'];
type Response = RoverHookResponse<Camera>;

const cameras = rovers.Curiosity.Cameras;

export function useCuriosityRover(): Response {
  const params = useParams();
  const [camera, setCamera] = useState<Camera|undefined>();
  const [photos, setPhotos] = useState<Photo[]|undefined>();
  const [page, setPage] = useState(parseInt(params.page || '') || 1);
  const [sol, setSol] = useState(1000);

  useEffect(() => {
    setPage(parseInt(params.page || '') || 1);
  }, [params]);
  useEffect(() => {
    search({camera, page, sol});
  }, [camera, page, sol]);

  async function search(params: Partial<Response>) {
    setPhotos(undefined);
    try {
      const photos = await getCuriosityList(params);
      setPhotos(photos);
    } catch {
      setPhotos([]);
    }
  }

  return {camera, cameras, photos, page, search, setCamera, setPage, setSol, sol};
}
