import { fetchDataHelper } from './fetch-data-helper';
import { naitonsMapper } from './mappers/nations-mapper';
import { vehiclesMapper } from './mappers/vehicles-mapper';
import { vehiclesTypesMapper } from './mappers/vehicles-types-mapper';
import { NationType } from './models/nation.types';
import { VehicleType } from './models/vehicle.types';

const VECHILES_URL = process.env.VECHILES_URL;
const MEDIA_PATH_URL = process.env.MEDIA_PATH_URL;
const NATIONS_URL = process.env.NATIONS_URL;
const VECHILE_TYPES_COMMON_URL = process.env.VECHILE_TYPES_COMMON_URL;

// TODO: undefined URL constant assertion
const fetchVehicles = async (): Promise<VehicleType[]> => {
  const vehiclesRaw = await fetchDataHelper(VECHILES_URL ?? '');
  const vehicles = vehiclesMapper(vehiclesRaw as object);
  return vehicles;
};

const fetchNations = async (): Promise<NationType[]> => {
  const nationsRaw = await fetchDataHelper(NATIONS_URL ?? '');
  const nations = naitonsMapper(nationsRaw as object[]);
  return nations;
};

const fetchMediaPath = async (): Promise<string> => {
  const path = await fetchDataHelper(MEDIA_PATH_URL ?? '');
  return path as string;
};

const fetchVehiclesTypesCommon = async () => {
  const vehiclesTypesCommonRaw = await fetchDataHelper(VECHILE_TYPES_COMMON_URL ?? '');
  const vehiclesTypesCommon = vehiclesTypesMapper(vehiclesTypesCommonRaw as object);
  return vehiclesTypesCommon;
};

export { fetchVehicles, fetchMediaPath, fetchNations, fetchVehiclesTypesCommon };
