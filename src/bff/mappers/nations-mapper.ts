import { NationType } from '../models/nation.types';

const naitonsMapper = (rawNations: object[]): NationType[] => {
  return rawNations.map((rawNation: any) => {
    return {
      id: rawNation.id,
      name: rawNation.name,
      icons: {
        large: rawNation.icons.large,
        default: rawNation.icons.default
      },
      color: Math.abs(rawNation.color).toString(16),
      localization: {
        mark: {
          ru: rawNation.localization.mark.ru,
          en: rawNation.localization.mark.en
        }
      }
    };
  });
};

export { naitonsMapper };
