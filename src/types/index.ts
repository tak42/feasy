import type { allowedOrigins, supportedValue } from '../const';

export type AllowedOrigins = typeof allowedOrigins;

type SupportedValue = (typeof supportedValue)[number];

export type TransferValue = {
  SpecifiedId: string;
  sourceValue: string | number;
};
export type SupportedValueTypes = Record<SupportedValue, TransferValue>;
