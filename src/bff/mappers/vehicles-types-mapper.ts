import { VehiclesCommon } from '../models/vehicle-common.types';

const vehiclesTypesMapper = (rawVehiclesTypes: object): VehiclesCommon[] => {
  return Object.entries(rawVehiclesTypes).map(([_, rawVehiclesType]) => {
    return {
      name: rawVehiclesType.name,
      sortOrder: rawVehiclesType.sort_order,
      localization: {
        mark: {
          ru: rawVehiclesType.localization.mark.ru,
          en: rawVehiclesType.localization.mark.en
        }
      },
      icons: {
        default: rawVehiclesType.icons.default,
        premium: rawVehiclesType.icons.premium,
        elite: rawVehiclesType.icons.elite,
        special: rawVehiclesType.icons.special,
        normal: rawVehiclesType.icons.normal
      }
    };
  });
};

export { vehiclesTypesMapper };
