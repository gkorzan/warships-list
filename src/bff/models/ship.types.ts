import type { LocalizedInfo } from './localizedInfo.types';

type Localization = {
  shortmark: LocalizedInfo;
  description: LocalizedInfo;
  mark: LocalizedInfo;
};

type IconUrls = {
  default: string;
  large: string;
  contour: string;
  contourAlive: string;
};

type ShipType = {
  id: number;
  level: number;
  name: string;
  tags: string[];
  localization: Localization;
  icons: IconUrls;
  nation: string;
};

export { ShipType };
