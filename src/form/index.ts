import type { GenerateDtoFunc, SupportedValue } from '../types';
import { generateCaoDto } from './cao';

export const generateDtoFunc: GenerateDtoFunc = {
  'https://form.cao.go.jp': (data: SupportedValue) => generateCaoDto(data),
};
