import React from 'react';

import { CameraName, ManifestData, ManifestInfo } from '../types';
import Select from './Select';

interface Props<C extends CameraName> {
  camera?: C;
  cameras: readonly C[];
  className?: string;
  infoKey?: ManifestInfo;
  manifest?: ManifestData<C>;
  setCamera: (camera?: C) => void;
  setInfoKey: (infoKey: ManifestInfo | undefined) => void;
}

export default function FilterBar<C extends CameraName>({camera, cameras, className, infoKey, manifest, setCamera, setInfoKey}: Props<C>) {
  return (
    <div className={`filter-bar flex gap-4 ${className||''}`.trim()}>
      <Select
        cleanable
        formatKey={option => option.value || 'All'}
        onChange={setCamera}
        options={cameras.map(name => ({value: name, label: name}))}
        placeholder="All Cameras"
        value={camera}
      />
      {manifest && (
        <>
          <Select
            cleanable
            formatKey={option => String(option.value.sol)}
            onChange={setInfoKey}
            options={manifest[camera || 'All']?.map((info) => ({value: info, label: info.sol}))}
            placeholder="Sol"
            value={infoKey}
          />
          <Select
            cleanable
            formatKey={option => String(option.value.sol)}
            onChange={setInfoKey}
            options={manifest[camera || 'All']?.map((info) => ({value: info, label: info.earth_date}))}
            placeholder="Earth Date"
            value={infoKey}
          />
        </>
      )}
    </div>
  );
}
