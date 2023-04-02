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
  if (isLoading)
    return (
      <div className="listBlockTable">
        {[...Array(10)].map((key) => (
          <div key={key} style={{ background: '#fff' }}>
            Kek
          </div>
        ))}
      </div>
    );
  if (vehicles.length === 0) return <h2>No results found</h2>;
  return (
    <table className="listBlockTable">
      <tbody>
        <tr>
          <th>ShipIcon</th>
          <th className="listBlockCellName">Name</th>
          <th>Nation</th>
          <th>Level</th>
        </tr>
        {vehicles.map((vehicle) => {
          const nationName = nationsMap[vehicle.nation].localization.mark.en;
          const nationFlagUrl = nationsMap[vehicle.nation].icons.default;
          const shipIconUrl = vehicle.name.includes('Pr_66_Moskva')
            ? vehicle.icons.contourDead
            : vehicle.icons.contourAlive;
          return (
            <tr key={`tableRow-${vehicle.id}`} className="listBlockRow">
              <th>
                <AtomIcon
                  baseUrl={mediaPath}
                  iconUrl={shipIconUrl}
                  alt={vehicle.name}
                  backgroundColor="#ffffff"
                  iconType="ship"
                />
              </th>
              <th className="listBlockCellName">{vehicle.localization.mark.en}</th>
              <th>
                <AtomIcon
                  baseUrl={mediaPath}
                  iconUrl={nationFlagUrl}
                  alt={nationName}
                  iconType="flag"
                />
              </th>
              <th>{vehicle.level}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
