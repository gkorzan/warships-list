import React from 'react';
import { VehicleType } from 'bff';

type ListBlockProps = {
  vehicles: VehicleType[];
  isLoading: boolean;
};

export const ListBlock = ({ vehicles, isLoading }: ListBlockProps) => {
  if (isLoading) return <h2>Loading</h2>;
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Nation</th>
          <th>Level</th>
        </tr>
        {vehicles.map((vehicle) => (
          <tr key={`tableRow-${vehicle.id}`}>
            <th>{vehicle.name}</th>
            <th>{vehicle.nation}</th>
            <th>{vehicle.level}</th>
          </tr>
        ))}
      </tbody>
    </table>
    // <ul>
    //   {vehicles.map((vehicle) => (
    //     <li key={vehicle.id}>{vehicle.name}</li>
    //   ))}
    // </ul>
  );
};
