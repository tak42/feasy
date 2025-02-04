import type { allowedOrigins, supportedValue } from '../const';

export type AllowedOrigins = typeof allowedOrigins;

export type SupportedValue = (typeof supportedValue)[number];

export type TransferValue = {
  specifiedId: string;
  sourceValue: string | number;
};
export type SupportedValueTypes = Record<SupportedValue, TransferValue>;
