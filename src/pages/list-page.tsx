import React, { useState, useEffect } from 'react';
import { ListBlock } from '../blocks/list-block/list-block';
import { fetchVehicles, fetchNations, fetchMediaPath, VehicleType, NationType } from 'bff';
import { PaginatorBlock } from '../blocks/paginator-block/paginator-block';
import { FilterBlock } from '../blocks/filter-block/filter-block';

export const ListPage = () => {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  const [currentVehicles, setCurrentVehicles] = useState<VehicleType[]>([]);
  const [nations, setNations] = useState<Record<string, NationType>>({});
  const [mediaPath, setMediaPath] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(10);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      const res = await fetchVehicles();
      setVehicles(res);
      setCurrentVehicles(res);
      setIsLoading(false);
    };

    fetchList();
  }, []);

  useEffect(() => {
    const fetchNationList = async () => {
      const res = await fetchNations();
      const nationsMap = res.reduce<Record<string, NationType>>((acc, curr) => {
        acc[curr.name] = curr;
        return acc;
      }, {});
      setNations(nationsMap);
    };

    fetchNationList();
  }, []);

  useEffect(() => {
    const getMediaPath = async () => {
      const res = await fetchMediaPath();
      setMediaPath(res);
    };

    getMediaPath();
  }, []);

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehiclesPerPage = currentVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const paginate = (number: number) => setCurrentPage(number);

  return (
    <div className="listPageWrapper">
      <h1>Vehicles</h1>
      <FilterBlock
        vehicles={vehicles}
        currentVehicles={currentVehicles}
        setCurrentVehicles={setCurrentVehicles}
      />
      <ListBlock
        vehicles={currentVehiclesPerPage}
        nationsMap={nations}
        mediaPath={mediaPath}
        isLoading={isLoading}
      />
      <PaginatorBlock
        vehiclesPerPage={vehiclesPerPage}
        totalVehicles={currentVehicles.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};
