import type { allowedOrigins, supportedValues } from '../const';

export type AllowedOrigins = typeof allowedOrigins;

export type SupportedValue = Record<(typeof supportedValues)[number], string>;

export type SupportedValueKeys = keyof SupportedValue;
