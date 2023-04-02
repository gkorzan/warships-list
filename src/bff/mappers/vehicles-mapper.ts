import { VehicleType } from '../models/vehicle.types';

const vehiclesMapper = (rawVehicles: object): VehicleType[] => {
  return Object.entries(rawVehicles).map(([key, rawVehicle]) => ({
    id: parseInt(key),
    level: rawVehicle.level,
    name: rawVehicle.name,
    tags: rawVehicle.tags,
    localization: {
      shortmark: {
        en: rawVehicle.localization.shortmark.en,
        ru: rawVehicle.localization.shortmark.ru
      },
      description: {
        en: rawVehicle.localization.description.en,
        ru: rawVehicle.localization.description.ru
      },
      mark: {
        en: rawVehicle.localization.mark.en,
        ru: rawVehicle.localization.mark.ru
      }
    },
    icons: {
      default: rawVehicle.icons.default,
      large: rawVehicle.icons.large,
      contour: rawVehicle.icons.contour,
      contourAlive: rawVehicle.icons.contour_alive,
      contourDead: rawVehicle.icons.contour_dead
    },
    nation: rawVehicle.nation
  }));
};

export { vehiclesMapper };
