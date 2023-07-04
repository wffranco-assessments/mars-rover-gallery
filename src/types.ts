export interface Camera<CN = string> {
  id: number;
  name: CN;
  rover_id: number;
  full_name: string;
}

export interface Photo<CN = string> {
  id: number;
  sol: number;
  camera: Camera<CN>;
  img_src: string;
  earth_date: string;
  rover: Rover;
}

export interface Rover {
  id: number;
  name: RoverName;
  landing_date: string;
  launch_date: string;
  status: RoverStatus;
}

export type RoverName = string;

export type RoverStatus = string;
