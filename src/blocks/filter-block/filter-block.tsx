import { VehicleType, NationType } from 'bff';
import React, { useRef, useState } from 'react';

import './filter-block.css';

type FilterBlockProps = {
  vehicles: VehicleType[];
  currentVehicles: VehicleType[];
  nationsMap: Record<string, NationType>;
  setCurrentVehicles: (vehicles: VehicleType[]) => void;
};

export const FilterBlock = ({
  vehicles,
  currentVehicles,
  nationsMap,
  setCurrentVehicles
}: FilterBlockProps) => {
  const textInputRef = useRef<HTMLInputElement>(document.createElement('input'));
  const levelSelectRef = useRef(document.createElement('select'));
  const nationSelectRef = useRef(document.createElement('select'));

  const levelOptions = [
    ...new Set(
      vehicles.reduce<number[]>((acc, curr) => {
        acc.push(curr.level);
        return acc;
      }, [])
    )
  ];
  const nationOptions = [
    ...new Set(
      vehicles.reduce<string[]>((acc, curr) => {
        acc.push(curr.nation);
        return acc;
      }, [])
    )
  ];

  const filter = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const currentInputText = textInputRef.current.value;
    if (!currentInputText) setCurrentVehicles(vehicles);

    const newList = vehicles
      .filter((item) => {
        if (currentInputText === '') return true;
        return (
          item.localization.mark.en.toLocaleLowerCase().includes(currentInputText.toLowerCase()) ||
          item.name.toLocaleLowerCase().includes(currentInputText.toLocaleLowerCase())
        );
      })
      .filter((item) => {
        if (levelSelectRef.current.value === '') return true;
        return item.level === parseInt(levelSelectRef.current.value);
      })
      .filter((item) => {
        if (nationSelectRef.current.value === '') return true;
        return item.nation === nationSelectRef.current.value;
      });
    setCurrentVehicles(newList);
  };

  const reset = (_: React.FormEvent<HTMLFormElement>) => {
    setCurrentVehicles(vehicles);
  };

  return (
    <form onSubmit={(e) => filter(e)} onReset={(e) => reset(e)} className="filterBlockForm">
      <label>
        SEARCH:
        <input
          type="text"
          ref={textInputRef}
          name="text"
          className="filterBlockInput"
          placeholder="NAME OR CODE"
        />
      </label>
      <select name="level" ref={levelSelectRef} className="filterBlockLevelSelect">
        <option key={'empty'} value={''}>
          LEVEL
        </option>
        {levelOptions
          .sort((a, b) => a - b)
          .map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
      </select>
      <select name="nation" ref={nationSelectRef} className="filterBlockNationSelect">
        <option key={'empty'} value={''}>
          NATION
        </option>
        {nationOptions.map((nation) => (
          <option key={nation} value={nation}>
            {nationsMap[nation].localization.mark.en}
          </option>
        ))}
      </select>
      <input type="reset" value="CLEAR!" className="filterBlockClearButton" />
      <input type="submit" value="LET'S GO!" className="filterBlockSubmitButton" />
    </form>
  );
};
