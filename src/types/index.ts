import type { ALLOWED_ORIGINS, SUPPORTED_VALUES } from '../const';

export type AllowedOrigins = typeof ALLOWED_ORIGINS;

export type SupportedValue = Record<(typeof SUPPORTED_VALUES)[number], string>;

export type SupportedValueKeys = keyof SupportedValue;
