import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOpportunityList } from '../services/opportunity';
import { Cameras, Photo, RoverHookResponse } from '../types';
import { rovers } from '../consts';

type Camera = Cameras['Opportunity'];
type Response = RoverHookResponse<Camera>;

const cameras = rovers.Opportunity.Cameras;

export function useOpportunityRover(): Response {
  const params = useParams();
  const [camera, setCamera] = useState<Camera|undefined>(undefined);
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
      const photos = await getOpportunityList({camera, page, sol});
      setPhotos(photos);
    } catch {
      setPhotos([]);
    }
  }

  return {camera, cameras, photos, page, search, setCamera, setPage, setSol, sol};
}
