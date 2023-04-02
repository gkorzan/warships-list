import React, { useState, useEffect } from 'react';
import { ListBlock } from '../blocks/list-block/list-block';
import { fetchVehicles, VehicleType } from 'bff';
import { PaginatorBlock } from '../blocks/paginator-block/paginator-block';

export const ListPage = () => {
  const [vehicles, setVehicles] = useState<VehicleType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [vehiclesPerPage, setVehiclesPerPage] = useState(10);

  useEffect(() => {
    const fetchList = async () => {
      setIsLoading(true);
      const res = await fetchVehicles();
      setVehicles(res);
      setIsLoading(false);
    };

    fetchList();
  }, []);

  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
  const currentVehicles = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

  const paginate = (number: number) => setCurrentPage(number);

  return (
    <div className="listPageWrapper">
      <h1>Vehicles</h1>
      <ListBlock vehicles={currentVehicles} isLoading={isLoading} />
      <PaginatorBlock
        vehiclesPerPage={vehiclesPerPage}
        totalVehicles={vehicles.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};
