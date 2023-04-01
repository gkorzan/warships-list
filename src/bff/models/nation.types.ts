import type { LocalizedInfo } from './localizedInfo.types';

type IconUrls = {
  default: string;
  large: string;
};

type Localization = {
  mark: LocalizedInfo;
};

type NationType = {
  id: number;
  name: string;
  icons: IconUrls;
  color: string;
  localization: Localization;
};

export { NationType };
