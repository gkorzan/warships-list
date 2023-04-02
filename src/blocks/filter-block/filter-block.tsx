import { VehicleType } from 'bff';
import React, { useRef, useState } from 'react';

type FilterBlockProps = {
  vehicles: VehicleType[];
  currentVehicles: VehicleType[];
  setCurrentVehicles: (vehicles: VehicleType[]) => void;
};

export const FilterBlock = ({
  vehicles,
  currentVehicles,
  setCurrentVehicles
}: FilterBlockProps) => {
  const textInputRef = useRef<HTMLInputElement>(document.createElement('input'));

  const filterByTextInput = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!textInputRef.current.value) return;
    const newList = vehicles.filter((item) => {
      return item.localization.mark.en
        .toLocaleLowerCase()
        .includes(textInputRef.current.value.toLowerCase());
    });
    setCurrentVehicles(newList);
  };
  return (
    // <div>
    //   <input type="text" ref={textInputRef} />
    //   <button onClick={() => filterByTextInput()}>kek</button>
    // </div>
    <form onSubmit={(e) => filterByTextInput(e)}>
      <label>
        Text Search:
        <input type="text" ref={textInputRef} name="text" />
      </label>
      <input type="submit" value="kek" />
    </form>
  );
};
