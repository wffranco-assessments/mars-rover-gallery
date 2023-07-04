import React from 'react';

import { CameraName } from '../types';

interface Props<C> {
  camera?: C;
  cameras: readonly C[];
  className?: string;
  setCamera: (_camera: C) => void;
}

export default function FilterBar<C extends CameraName>({camera, cameras, className, setCamera}: Props<C>) {
  return (
    <div className={`filter-bar flex gap-4 ${className||''}`.trim()}>
      <select className="form-field" onChange={e => setCamera((e.target.value as C) || undefined)} value={camera}>
        <option value={undefined}>All Cammeras</option>
        {cameras.map(camera => <option value={camera} key={camera}>{camera}</option>)}
      </select>
    </div>
  );
}
