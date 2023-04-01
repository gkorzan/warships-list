import type { LocalizedInfo } from './localizedInfo.types';

type Localization = {
  mark: LocalizedInfo;
};

type IconUrls = {
  default: string;
  premium: string;
  elite: string;
  special: string;
  normal: string;
};

type VehiclesCommon = {
  name: string;
  sortOrder: number;
  localization: Localization;
  icons: IconUrls;
};

export { VehiclesCommon };
