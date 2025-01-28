import type { allowedOrigins, supportedValueTypes } from '../const';

export type AllowedOrigins = typeof allowedOrigins;

export type SupportedValueTypes = typeof supportedValueTypes;

export type TransferValue = {
  SpecifiedId: string;
  sourceValue: string | number;
};
