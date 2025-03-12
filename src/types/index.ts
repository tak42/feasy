import type { ALLOWED_ORIGINS, CAO_INPUT_IDS, SUPPORTED_VALUES } from '../const';
import type { PostInputDataSet } from './Post.type';

export type AllowedOrigins = typeof ALLOWED_ORIGINS;

export type CaoInputIds = typeof CAO_INPUT_IDS;

export type CombinedFormIds = CaoInputIds;

export type GenerateDtoFunc = Record<
  AllowedOrigins[number],
  (data: SupportedValue) => PostInputDataSet[]
>;

export type SupportedValue = Record<(typeof SUPPORTED_VALUES)[number], string>;
