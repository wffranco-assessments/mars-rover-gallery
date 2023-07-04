import { rovers, status } from './consts';

export interface Camera<CN = CameraName> {
  id: number;
  name: CN;
  rover_id: number;
  full_name: string;
}

export type CameraName = Cameras[keyof Cameras];

export interface Cameras {
  Curiosity: typeof rovers.Curiosity.Cameras[number];
  Opportunity: typeof rovers.Opportunity.Cameras[number];
  Spirit: typeof rovers.Spirit.Cameras[number];
}

export interface Photo<CN = CameraName> {
  id: number;
  sol: number;
  camera: Camera<CN>;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface PhotosResponse<CN = CameraName> {
  photos: Photo<CN>[];
}

export interface Manifest<CN = CameraName> {
  name: RoverName;
  landing_date: string;
  launch_date: string;
  status: RoverStatus;
  max_sol: number;
  max_date: string;
  total_photos: number;
  photos: ManifestPhoto<CN>[];
}

export interface ManifestPhoto<CN = CameraName> {
  sol: number;
  earth_date: string;
  total_photos: number;
  cameras: CN[];
}

export interface ManifestResponse<CN = CameraName> {
  photo_manifest: Manifest<CN>;
}

export interface Rover {
  id: number;
  name: RoverName;
  landing_date: string;
  launch_date: string;
  status: RoverStatus;
}

export interface RoverHookResponse<CN = CameraName> {
  camera?: CN;
  cameras: readonly CN[];
  page: number;
  sol?: number;
  photos?: Photo[];
  setCamera: (_camera: CN) => void;
  setPage: (_page: number) => void;
  setSol: (_sol: number) => void;
  search: (_params: Partial<RoverHookResponse<CN>>) => void;
}


export type RoverName = keyof typeof rovers;

export type RoverStatus = typeof status[number];
