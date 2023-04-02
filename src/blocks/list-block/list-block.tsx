import React from 'react';
import { VehicleType, NationType } from 'bff';
import { AtomIcon } from '../../atoms/atom-icon/atom-icon';

import './list-block.css';

type ListBlockProps = {
  vehicles: VehicleType[];
  nationsMap: Record<string, NationType>;
  mediaPath: string;
  isLoading: boolean;
};

export const ListBlock = ({ vehicles, nationsMap, mediaPath, isLoading }: ListBlockProps) => {
  if (isLoading) return <h2>Loading</h2>;
  return (
    <table className="listBlockTable">
      <tbody>
        <tr>
          <th>ShipIcon</th>
          <th>Name</th>
          <th>Nation</th>
          <th>Level</th>
        </tr>
        {vehicles.map((vehicle) => {
          const nationName = nationsMap[vehicle.nation].localization.mark.en;
          const nationFlagUrl = nationsMap[vehicle.nation].icons.default;
          const shipIconUrl = vehicle.icons.contour;
          return (
            <tr key={`tableRow-${vehicle.id}`}>
              <th>
                <AtomIcon
                  baseUrl={mediaPath}
                  iconUrl={shipIconUrl}
                  alt={vehicle.name}
                  backgroundColor="#ffffff"
                />
              </th>
              <th>{vehicle.localization.mark.en}</th>
              {/* <th>{nationsMap[vehicle.nation].localization.mark.en}</th> */}
              <th>
                <AtomIcon baseUrl={mediaPath} iconUrl={nationFlagUrl} alt={nationName} />
              </th>
              <th>{vehicle.level}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
    // <ul>
    //   {vehicles.map((vehicle) => (
    //     <li key={vehicle.id}>{vehicle.name}</li>
    //   ))}
    // </ul>
  );
};
