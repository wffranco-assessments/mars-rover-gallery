export const rovers = {
  Curiosity: {
    Cameras: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
  },
  Opportunity: {
    Cameras: ['ENTRY', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  },
  Spirit: {
    Cameras: ['ENTRY', 'FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'],
  },
} as const;

export const status = ['active', 'inactive', 'complete'] as const;
