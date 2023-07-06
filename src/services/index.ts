import { Manifest, ManifestData } from '../types';

export function getManifestData({photos}: Manifest) {
  return photos.reduce((data: ManifestData, {earth_date, sol, total_photos, cameras}) => {
    const info = {earth_date, sol, total_photos};
    data.All?.push(info);
    cameras.forEach(camera => {
      data[camera] ||= [];
      data[camera]?.push(info);
    });
    return data;
  }, {All: []});
}
