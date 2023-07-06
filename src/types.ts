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

/** Dinamic Key Object (use a list of string keys allowed) */
export type DKeyObj<T, K extends string | number = string> = {
  [P in K]: T;
};

export type Fn<A, B = A> = (param?: A | undefined) => A extends undefined ? B | undefined : B;

export interface Photo<CN = CameraName> {
  id: number;
  sol: number;
  camera: Camera<CN>;
  img_src: string;
  earth_date: StrDate;
  rover: Rover;
}

export interface PhotosResponse<CN = CameraName> {
  photos: Photo<CN>[];
}

export interface Manifest<CN = CameraName> {
  name: RoverName;
  landing_date: StrDate;
  launch_date: StrDate;
  status: RoverStatus;
  max_sol: number;
  max_date: StrDate;
  total_photos: number;
  photos: ManifestPhoto<CN>[];
}

export type ManifestData<C extends CameraName = CameraName> = {
  [key in C|'All']?: ManifestInfo[];
}

export interface ManifestInfo {
  sol: number;
  earth_date: StrDate;
  total_photos: number;
}

export interface ManifestPhoto<CN = CameraName> {
  sol: number;
  earth_date: StrDate;
  total_photos: number;
  cameras: CN[];
}

export interface ManifestResponse<CN = CameraName> {
  photo_manifest: Manifest<CN>;
}

export type StrDate = `${bigint}-${0|''}${bigint}-${0|''}${bigint}`;

export interface Rover {
  id: number;
  name: RoverName;
  landing_date: StrDate;
  launch_date: StrDate;
  status: RoverStatus;
}

export interface RoverHookResponse<CN = CameraName> {
  camera?: CN;
  cameras: readonly CN[];
  infoKey?: ManifestInfo;
  manifest?: ManifestData;
  page: number;
  sol?: number;
  photos?: Photo[];
  setCamera: (camera?: CN) => void;
  setInfoKey: (infoKey?: ManifestInfo) => void;
  setManifest: (manifest?: ManifestData) => void;
  setPage: (page: number) => void;
  setSol: (sol: number) => void;
  search: (params: Partial<RoverHookResponse<CN>>) => void;
}

export type RoverName = keyof typeof rovers;

export type RoverStatus = typeof status[number];
